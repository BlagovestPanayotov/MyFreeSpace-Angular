import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from 'src/app/core/guards/auth.activate';
import { NotVerifiedGuard } from 'src/app/core/guards/not-verified.activate';

const routes: Routes = [
  {
    path: 'user-list',
    canActivate: [AuthGuard, NotVerifiedGuard],
    component: ContentComponent,
  },
  {
    path: 'posts-list',
    canActivate: [NotVerifiedGuard],
    component: ContentComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuard,NotVerifiedGuard],
    component: CreateDestinationComponent,
  },
  {
    path: 'details/:destId',
    canActivate: [NotVerifiedGuard],
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
