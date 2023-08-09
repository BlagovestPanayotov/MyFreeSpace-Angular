import { Component, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IComment } from 'src/app/shared/types/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnDestroy {
  @Input() comment: IComment = {
    _ownerId: '',
    content: '',
    _destinationId: '',
    _createdOn: '',
    _id: '',
  };

  apiError: string = '';
  deleteMsgDisplayed: boolean = false;
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private destinationService: DestinationService,
    private viewContainerRef: ViewContainerRef
  ) {}
  ngOnDestroy(): void {
    console.log('destroywed');
    
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  toggleDeleteMsgDisplayed() {
    this.deleteMsgDisplayed = !this.deleteMsgDisplayed;
  }

  deleteComment() {
    this.isLoading = true;
    this.destinationService.deleteComment(this.comment._id).subscribe({
      next: () => {
        this.isLoading = false;
        this.viewContainerRef.element.nativeElement.parentElement.removeChild(
          this.viewContainerRef.element.nativeElement
        );
      },
      error: (err) => {
        this.apiError = 'You are NOT allowed to do that!';
        this.isLoading = false;
        this.deleteMsgDisplayed = false;
      },
    });
  }


}
