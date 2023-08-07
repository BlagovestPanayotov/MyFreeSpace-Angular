import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IComment } from 'src/app/shared/types/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comment:IComment={
    _ownerId: '',
    content: '',
    _destinationId: '',
    _createdOn: '',
    _id: ''
  }

  constructor(private userService:UserService){}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
