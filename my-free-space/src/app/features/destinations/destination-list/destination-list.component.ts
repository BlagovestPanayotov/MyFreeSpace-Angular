import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationListComponent implements OnInit{

  list: IDestination[] = [];

  constructor(private destinationService:DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getAllDestinations().subscribe({
      next: (dest)=>{
        this.list = dest
      }
    })
  }
}
