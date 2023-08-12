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
    this.destinationService.getCount().subscribe({
      next: (count) => {
        
        this.destinationService.getRandomDestination(count).subscribe({
          next: (value) => {
            this.cardTop = value[0];
            this.isLoadingTop = false;
          },
          error: (err) => {
            throw err;
          },
        });
        
        this.destinationService.getRandomDestination(count).subscribe({
          next: (value) => {
            this.cardBottom = value[0];
            this.isLoadingBottom = false;
          },
          error: (err) => {
            throw err;
          },
        });

      },
      error: (err) => {
        throw err;
      },
    });
  }
}
