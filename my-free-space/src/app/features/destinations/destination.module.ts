import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    CreateDestinationComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    
  ]
})
export class DestinationModule { }
