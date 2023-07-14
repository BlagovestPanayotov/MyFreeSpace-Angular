import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AsideComponent } from './aside/aside.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DestinationListComponent,
    UserListComponent,
    AsideComponent,
    DestinationCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AsideComponent,
    HomeComponent,
    DestinationListComponent,
    UserListComponent
  ]
})
export class FeaturesModule { }
