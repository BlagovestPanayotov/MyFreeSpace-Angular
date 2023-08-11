import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IComment } from 'src/app/shared/types/comment';
import { IDestination } from 'src/app/shared/types/destination';
import { ILike } from 'src/app/shared/types/like';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['destId'];

  destination: IDestination = {
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
  likes: ILike[] = [];
  comments: IComment[] = [];

  userLike: ILike | undefined;

  apiError: string = '';

  editMode: boolean = false;

  loading: boolean = true;
  commentsLoading: boolean = true;
  likesLoading: boolean = true;

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

  ngOnInit(): void {
    this.getDestination();
    this.getUser();
  }

  getDestination(): void {
    this.loading = true;

    this.destinationService.getDestinationById(this.id).subscribe((dest) => {
      this.destination = dest;
      //Gets Likes
      this.getLikes();
      //Gets comments
      this.getComments();
    });
  }

  getUser(): void {
    this.loading = true;
    this.userService.getUser().subscribe({
      next: (u: IUser) => {
        this.user = u;
        this.loading = false;
      },
      error: (err) => {
        this.user = null;
        this.loading = false;
      },
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
            this.apiError = 'You are NOT allowed to do that!!!';
            this.editMode = false;
            this.loading = false;
            window.scroll(0, 0);
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
        this.apiError = 'You are NOT allowed to do that!!!';
      },
    });
  }

  //LIKES

  getLikes(): void {
    this.destinationService.getLikes(this.id).subscribe((l) => {
      this.likes = l;
      this.userLike = this.likes.find((x) => x._ownerId === this.user?._id);
      this.likesLoading = false;
    });
  }

  giveLike(): void {
    this.likesLoading = true;
    this.destinationService.giveLike(this.destination._id).subscribe({
      next: (l) => {
        this.likes.push(l);
        this.userLike = l;
        this.likesLoading = false;
      },
      error: (err) => {
        console.log(err);
        window.scroll(0, 0);
        this.apiError = 'You are NOT allowed to do that!!!';
        this.likesLoading = true;
      },
    });
  }

  removeLike(): void {
    if (this.userLike?._id) {
      this.likesLoading = true;
      this.destinationService.delteLike(this.userLike._id).subscribe({
        next: (res) => {
          this.userLike = undefined;
          this.likes = this.likes.filter((x) => x._ownerId !== this.user?._id);
          this.likesLoading = false;
        },
        error: (err) => {
          console.log(err);
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
    const id = this.activatedRoute.snapshot.params['destId'];
    this.destinationService.getComments(id).subscribe((c) => {
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
            this.apiError = 'You are NOT allowed to do that!!!';
            this.editMode = false;
            this.commentsLoading = false;
            window.scroll(0, 0);
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
