import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DestinationListComponent } from './destinations/destination-list/destination-list.component';
import { OwnerListComponent } from './destinations/owner-destination-list/owner-list.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationCardComponent } from './destinations/destination-card/destination-card.component';
import { DestinationModule } from './destinations/destination.module';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { ContentComponent } from './content/content.component';
import { SearchDestinationComponent } from './destinations/search-destination/search-destination.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    DestinationListComponent,
    OwnerListComponent,
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
    OwnerListComponent,
    SearchDestinationComponent
  ]
})
export class FeaturesModule { }