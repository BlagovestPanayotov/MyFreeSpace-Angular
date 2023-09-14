import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IComment } from 'src/app/shared/types/comment';
import { ICommentLike } from 'src/app/shared/types/commentLike';

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

  apiError: string = '';
  deleteMsgDisplayed: boolean = false;
  editFormDisplayed: boolean = false;

  isLoading: boolean = false;

  likes: ICommentLike[] = [];
  userLike: ICommentLike | undefined;
  isOwner: boolean = false;

  constructor(
    private userService: UserService,
    private destinationService: DestinationService
  ) {}

  ngOnInit() {
    // this.destinationService.getCommentLikes(this.comment._id).subscribe((l) => {
    //   this.likes = l;
    //   if (this.isLogged) {
    //     this.userService.getUser().subscribe((u) => {
    //       this.userLike = this.likes.find((x) => x._ownerId === u?._id);
    //       this.isOwner = u?._id === this.comment._ownerId;
    //       this.isLoading = false;
    //     });
    //   } else {
    //     this.isLoading = false;
    //   }
    // });
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

  editComment(form: NgForm) {
    if (form.invalid || !this.isOwner) return;

    const { content } = form.value;
    this.isLoading = true;

    this.destinationService
      .updateComment(this.comment._id, this.comment._destinationId, content)
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

  //LIKES

  giveLike(): void {
    this.isLoading = true;
    this.destinationService.giveCommentLike(this.comment._id).subscribe({
      next: (l) => {
        this.likes.push(l);
        this.userLike = l;
        this.isLoading = false;
      },
      error: (err) => {
        this.apiError = 'You are NOT allowed to do that!!!';
        this.isLoading = true;
      },
    });
  }

  removeLike(): void {
    if (this.userLike?._id) {
      this.isLoading = true;
      this.destinationService.delteCommentLike(this.userLike._id).subscribe({
        next: (res) => {
          this.likes = this.likes.filter((x) => x._id !== this.userLike?._id);
          this.userLike = undefined;
          this.isLoading = false;
        },
        error: (err) => {
          this.apiError = 'You are NOT allowed to do that!!!';
          this.isLoading = false;
        },
      });
    }
    return;
  }
}
