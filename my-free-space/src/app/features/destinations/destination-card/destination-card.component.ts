import { Component, Input } from '@angular/core';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css'],
})
export class DestinationCardComponent {
  @Input() dest: IDestination={
    _id: '',
    name: '',
    country: '',
    description: '',
    _ownerId: '',
    img: '',
    _createdOn: ''
  };
}
