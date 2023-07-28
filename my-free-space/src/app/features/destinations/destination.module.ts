import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateDestinationComponent,
    DetailsComponent,
    SearchDestinationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SearchDestinationComponent
  ]
})
export class DestinationModule { }
