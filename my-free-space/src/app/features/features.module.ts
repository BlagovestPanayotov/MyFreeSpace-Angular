import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DestinationListComponent } from './destinations/destination-list/destination-list.component';
import { UserListComponent } from './destinations/user-destination-list/user-list.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationCardComponent } from './destinations/destination-card/destination-card.component';
import { DestinationModule } from './destinations/destination.module';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { ContentComponent } from './content/content.component';
import { SearchDestinationComponent } from './destinations/search-destination/search-destination.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DestinationListComponent,
    UserListComponent,
    AsideComponent,
    DestinationCardComponent,
    AboutComponent,
    ContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DestinationModule,
    AuthModule,
    RouterModule,
  ],
  exports: [
    AsideComponent,
    HomeComponent,
    DestinationListComponent,
    UserListComponent,
    SearchDestinationComponent
  ]
})
export class FeaturesModule { }