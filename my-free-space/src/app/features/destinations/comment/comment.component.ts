import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  constructor(private userService:UserService){}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
