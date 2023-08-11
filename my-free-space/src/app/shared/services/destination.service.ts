import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDestination } from '../types/destination';
import { destinationEndpoints } from './endpoits';
import { ILike } from '../types/like';
import { IComment } from '../types/comment';
import { ICommentLike } from '../types/commentLike';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  getAllDestinations(name: string, country: string) {
    return this.http.get<IDestination[]>(
      destinationEndpoints.getAll(name, country)
    );
  }

  getDestinationById(id: string) {
    return this.http.get<IDestination>(destinationEndpoints.getById(id));
  }

  createDestination(
    name: string,
    country: string,
    description: string,
    img: string
  ) {
    return this.http.post<IDestination>(destinationEndpoints.create, {
      name,
      country,
      description,
      img,
    });
  }

  updateDestination(
    id: string,
    name: string,
    country: string,
    description: string,
    img: string
  ) {
    return this.http.put<IDestination>(destinationEndpoints.update(id), {
      name,
      country,
      description,
      img,
    });
  }

  deleteDestination(id: string) {
    return this.http.delete(destinationEndpoints.delete(id));
  }

  getUserDestinations(userId: string, name: string, country: string) {
    return this.http.get<IDestination[]>(
      destinationEndpoints.getUserDestinations(userId, name, country)
    );
  }

  getCount() {
    return this.http.get<number>(destinationEndpoints.getCountDestiantions);
  }

  getRandomDestination(count: number) {
    const random = Math.floor(Math.random() * count);
    return this.http.get<IDestination[]>(
      destinationEndpoints.getListOfDestinations(random, 1)
    );
  }

  //LIKES

  getLikes(destinationId: string) {
    return this.http.get<ILike[]>(destinationEndpoints.getLikes(destinationId));
  }

  giveLike(destinationId: string) {
    return this.http.post<ILike>(destinationEndpoints.giveLike, {
      _destinationId: destinationId,
    });
  }

  delteLike(likeId: string) {
    return this.http.delete(destinationEndpoints.deleteLike(likeId));
  }

  //COMMENTS

  getComments(destinationId: string) {
    return this.http.get<IComment[]>(
      destinationEndpoints.getComments(destinationId)
    );
  }

  createComment(_destinationId: string, content: string) {
    return this.http.post<IComment>(destinationEndpoints.createComment, {
      _destinationId,
      content,
    });
  }

  deleteComment(commentId: string) {
    return this.http.delete(destinationEndpoints.deleteComment(commentId));
  }

  updateComment(commentId: string, _destinationId: string, content: string) {
    console.log(_destinationId);
    console.log(content);

    return this.http.put<IComment>(
      destinationEndpoints.updateComment(commentId),
      {
        _destinationId,
        content,
      }
    );
  }

  //COMMENTS-LIKES

  getCommentLikes(commentId: string) {
    return this.http.get<ICommentLike[]>(
      destinationEndpoints.getCommentLikes(commentId)
    );
  }

  giveCommentLike(commentId: string) {
    return this.http.post<ICommentLike>(destinationEndpoints.giveCommentLike, {
      _commentId: commentId,
    });
  }

  delteCommentLike(commentLikeId: string) {
    return this.http.delete(destinationEndpoints.deleteCommentLike(commentLikeId));
  }
}
