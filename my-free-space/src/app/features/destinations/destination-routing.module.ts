import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'user-list',
    component:ContentComponent
  },
  {
    path:'posts-list',
    component:ContentComponent
  },
  {
    path:'create',
    component:CreateDestinationComponent
  },
  {
    path:'details',
    component:DetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DestinationRoutingModule { }
