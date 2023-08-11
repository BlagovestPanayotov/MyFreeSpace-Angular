import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from 'src/app/core/guards/auth.activate';
import { UnauthGuard } from 'src/app/core/guards/unauth.activate';



const routes: Routes = [
  {
    path: 'profile',
    canActivate:[AuthGuard],
    component: ProfileComponent,
  },
  {
    path: 'logout',
    canActivate:[AuthGuard],
    component: LogoutComponent,
  },
  {
    path: 'register',
    canActivate:[UnauthGuard],
    component: RegisterComponent,
  },
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
export class AuthRoutingModule { }
