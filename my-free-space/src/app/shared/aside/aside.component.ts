import { Component, OnInit } from '@angular/core';
import { IDestination } from '../types/destination';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  cardTop: IDestination = {
    _id: '',
    name: '',
    country: '',
    description: '',
    _ownerId: '',
    img: '',
    _createdOn: '',
    likeCount: 0,
    commentCount: 0,
    ownerInfo: {
      thumbUrl: '',
      gender: '',
      accountName: '',
    },
  };
  cardBottom: IDestination = {
    _id: '',
    name: '',
    country: '',
    description: '',
    _ownerId: '',
    img: '',
    _createdOn: '',
    likeCount: 0,
    commentCount: 0,
    ownerInfo: {
      thumbUrl: '',
      gender: '',
      accountName: '',
    },
  };

  isLoading: boolean = true;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getRandom().subscribe({
      next: (result) => {
        this.cardTop = result[0];
        this.cardBottom = result[1];
        this.isLoading = false;
      },
      error: (err) => {
        throw err;
      },
    });
  }
}
