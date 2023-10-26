import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from 'src/app/core/guards/auth.activate';
import { NotVerifiedGuard } from 'src/app/core/guards/not-verified.activate';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { OwnerListComponent } from './owner-destination-list/owner-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContentComponent,
    children: [
      {
        path: 'user',
        canActivate: [AuthGuard, NotVerifiedGuard],
        component: OwnerListComponent,
      },
      {
        path: 'all',
        canActivate: [NotVerifiedGuard],
        component: DestinationListComponent,
      },
      {
        path: 'user/:userId',
        canActivate: [AuthGuard, NotVerifiedGuard],
        component: UserListComponent,
      },
    ],
  },
  {
    path: 'create',
    canActivate: [AuthGuard, NotVerifiedGuard],
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
