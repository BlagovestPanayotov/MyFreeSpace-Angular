import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IComment } from 'src/app/shared/types/comment';
import { IDestinationDetails } from 'src/app/shared/types/destinationDetails';
import { ILike } from 'src/app/shared/types/like';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['destId'];

  destination: IDestinationDetails = {
    _id: '',
    name: '',
    country: '',
    description: '',
    _ownerId: '',
    img: '',
    _createdOn: '',
  };

  user: IUser | null = null;
  countries: string[] = COUNTRIES_LIST;
  likes: number = 0;
  comments: IComment[] = [];

  hasLiked: boolean = false;

  apiError: string = '';

  editMode: boolean = false;

  loading: boolean = true;
  commentsLoading: boolean = false;
  //TODO
  likesLoading: boolean = false;
  //TODO

  deleteMsgDisplayed: boolean = false;
  leaveCommentDisplayed: boolean = false;

  constructor(
    private destinationService: DestinationService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get isOwner(): boolean {
    return this.user?._id === this.destination._ownerId;
  }

  ngOnInit(): void {
    this.getDestination();
    this.getUser();
  }

  getDestination(): void {
    this.loading = true;

    this.destinationService.getDestinationById(this.id).subscribe((dest) => {
      this.destination = dest;
      this.getLikes();
      this.getComments();
    });
  }

  getUser(): void {
    this.loading = true;
    this.userService.getUser().subscribe({
      next: (u: IUser | undefined) => {
        if (u) {
          this.user = u;
          this.loading = false;
        } else {
          this.user = null;
          this.loading = false;
        }
      },
      error: (err) => {},
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  editDestination(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loading = true;

    const { name, country, description, img } = form.value;

    this.destinationService
      .updateDestination(this.destination._id, name, country, description, img)
      .subscribe({
        next: (result) => {
          this.destination = result;
          this.toggleEditMode();
          this.loading = false;
        },
        error: (err) => {
          if (err.status === 403 || err.status === 401) {
            window.scroll(0, 0);
            this.apiError = 'You are NOT allowed to do that!!!';
            this.editMode = false;
            this.loading = false;
            return;
          }
          throw err;
        },
      });
  }

  deleteMsgDisplayedToggle(): void {
    this.deleteMsgDisplayed = !this.deleteMsgDisplayed;
  }

  deleteDestination(): void {
    if (this.user?._id !== this.destination._ownerId) {
      window.scroll(0, 0);
      this.apiError = 'You are NOT allowed to do that!!!';
      return;
    }

    this.destinationService.deleteDestination(this.destination._id).subscribe({
      next: () => {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/dest/user-list']);
        }, 1500);
      },
      error: (err) => {
        this.loading = false;
        window.scroll(0, 0);
        this.apiError = 'You are NOT allowed to do that!!!';
      },
    });
  }

  //LIKES

  getLikes(): void {
    this.destinationService.getLikes(this.id).subscribe(([likes, hasLiked]) => {
      console.log(likes);
      
      this.likes = likes;
      if (hasLiked) {
        this.hasLiked = hasLiked;
      }
      this.likesLoading = false;
    });
  }

  giveLike(): void {
    this.likesLoading = true;
    this.destinationService.giveLike(this.destination._id).subscribe({
      next: (l) => {
        this.getLikes();
      },
      error: (err) => {
        console.log(err);
        this.getLikes();
        window.scroll(0, 0);
        this.apiError = 'You are NOT allowed to do that!!!';
        this.likesLoading = false;
      },
    });
  }

  removeLike(): void {
    if (this.hasLiked) {
      this.likesLoading = true;
      this.destinationService.delteLike(this.destination._id).subscribe({
        next: (res) => {
          this.hasLiked = false;
          this.getLikes();
        },
        error: (err) => {
          console.log(err);
          this.getLikes();
          window.scroll(0, 0);
          this.apiError = 'You are NOT allowed to do that!!!';
          this.likesLoading = false;
        },
      });
    }
    return;
  }

  //COMMENTS

  toggleCommentForm(): void {
    this.leaveCommentDisplayed = !this.leaveCommentDisplayed;

    if (this.leaveCommentDisplayed) {
      this.router.navigate([], { fragment: 'comment' });
    }
  }

  getComments(): void {
    const destId = this.destination._id;
    this.destinationService.getComments(destId).subscribe((c) => {
      this.comments = c;
      this.commentsLoading = false;
    });
  }

  leaveComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.commentsLoading = true;

    const { comment } = form.value;

    this.destinationService
      .createComment(this.destination._id, comment)
      .subscribe({
        next: (result) => {
          this.getComments();
          this.toggleCommentForm();
        },
        error: (err) => {
          if (err.status === 403 && err.statusText === 'Forbidden') {
            window.scroll(0, 0);
            this.apiError = 'You are NOT allowed to do that!!!';
            this.editMode = false;
            this.commentsLoading = false;
            this.toggleCommentForm();
            return;
          }
          console.log(err);
        },
      });
  }

  removeComment(comment: string) {
    this.comments = this.comments.filter((x) => x._id !== comment);
  }
}
