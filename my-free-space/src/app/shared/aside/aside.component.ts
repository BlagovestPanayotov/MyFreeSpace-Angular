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
  };
  cardBottom: IDestination = {
    _id: '',
    name: '',
    country: '',
    description: '',
    _ownerId: '',
    img: '',
    _createdOn: '',
  };

  isLoadingTop: boolean = true;
  isLoadingBottom: boolean = true;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getRandom().subscribe({
      next: (result) => {
        this.cardTop = result[0];
        this.isLoadingTop = false;

        this.cardBottom = result[1];
        this.isLoadingBottom = false;
        console.log(result);
      },
      error: (err) => {
        throw err;
      },
    });
  }
}
