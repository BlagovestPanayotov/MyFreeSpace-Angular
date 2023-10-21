import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from 'src/app/core/guards/auth.activate';
import { UnauthGuard } from 'src/app/core/guards/unauth.activate';
import { NotVerifiedComponent } from './not-verified/not-verified.component';
import { NotVerifiedGuard } from 'src/app/core/guards/not-verified.activate';
import { VerifiedComponent } from './verified/verified.component';
import { VerifiedGuard } from 'src/app/core/guards/verified.activate';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    canActivate: [AuthGuard, NotVerifiedGuard],
    component: OwnerProfileComponent,
  },
  {
    path: 'profile/:userId',
    canActivate: [AuthGuard, NotVerifiedGuard],
    component: UserProfileComponent,
  },
  {
    path: 'logout',
    canActivate: [AuthGuard],
    component: LogoutComponent,
  },
  {
    path: 'register',
    canActivate: [UnauthGuard, NotVerifiedGuard],
    component: RegisterComponent,
  },
  {
    path: 'verify',
    component: NotVerifiedComponent,
  },
  {
    path: 'verified/:token',
    canActivate: [VerifiedGuard],
    component: VerifiedComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
