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

  constructor(private api:DestinationService) {}

  ngOnInit(): void {
    this.api.getAllDestinations().subscribe({
      next: (dest)=>{
        console.log(dest);
        
        this.list = dest
      }
    })
  }
}
