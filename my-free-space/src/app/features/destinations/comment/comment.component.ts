import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IComment } from 'src/app/shared/types/comment';
import { ICommentLike } from 'src/app/shared/types/commentLike';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Output() removeCurrentComment = new EventEmitter<any>();

  @Input() comment: IComment = {
    _ownerId: '',
    content: '',
    _destinationId: '',
    _createdOn: '',
    _id: '',
  };

  @Input() user: IUser | null = null;

  isOwner: boolean = false;

  apiError: string = '';
  deleteMsgDisplayed: boolean = false;
  editFormDisplayed: boolean = false;

  isLoading: boolean = false;

  likes: number = 0;
  hasLiked: boolean = false;

  constructor(
    private userService: UserService,
    private destinationService: DestinationService
  ) {}

  ngOnInit() {
    this.isOwner = this.comment._ownerId == this.user?._id;

    this.destinationService
      .getCommentLikes(this.comment._id)
      .subscribe(([count, liked]) => {
        this.likes = Number(count);

        this.hasLiked = liked;

        this.isLoading = false;
      });
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  toggleDeleteMsgDisplayed() {
    this.deleteMsgDisplayed = !this.deleteMsgDisplayed;
  }

  toggleEditFormDisplayed() {
    this.deleteMsgDisplayed = false;
    this.editFormDisplayed = !this.editFormDisplayed;
  }

  editComment(form: NgForm) {
    if (form.invalid || !this.isOwner) return;

    const { content } = form.value;
    this.isLoading = true;

    this.destinationService
      .updateComment(this.comment._id, content)
      .subscribe({
        next: (value) => {
          this.comment = value;
          this.editFormDisplayed = false;
          this.isLoading = false;
        },
        error: (err) => {
          this.apiError = 'You are NOT allowed to do that!';
          this.isLoading = false;
          this.editFormDisplayed = false;
        },
      });
  }

  deleteComment() {
    this.isLoading = true;
    this.destinationService.deleteComment(this.comment._id).subscribe({
      next: () => {
        this.removeCurrentComment.emit(this.comment._id);
      },
      error: (err) => {
        this.apiError = 'You are NOT allowed to do that!';
        this.isLoading = false;
        this.deleteMsgDisplayed = false;
      },
    });
  }

  //LIKES

  giveLike(): void {
    // this.isLoading = true;
    // this.destinationService.giveCommentLike(this.comment._id).subscribe({
    //   next: (l) => {
    //     this.likes.push(l);
    //     this.userLike = l;
    //     this.isLoading = false;
    //   },
    //   error: (err) => {
    //     this.apiError = 'You are NOT allowed to do that!!!';
    //     this.isLoading = true;
    //   },
    // });
  }

  removeLike(): void {
    // if (this.userLike?._id) {
    //   this.isLoading = true;
    //   this.destinationService.delteCommentLike(this.userLike._id).subscribe({
    //     next: (res) => {
    //       this.likes = this.likes.filter((x) => x._id !== this.userLike?._id);
    //       this.userLike = undefined;
    //       this.isLoading = false;
    //     },
    //     error: (err) => {
    //       this.apiError = 'You are NOT allowed to do that!!!';
    //       this.isLoading = false;
    //     },
    //   });
    // }
    // return;
  }
}
