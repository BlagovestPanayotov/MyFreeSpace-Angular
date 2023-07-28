import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivate } from 'src/app/core/guards/auth.activate';



const routes: Routes = [
  {
    path: 'profile',
    canActivate:[AuthActivate],
    component: ProfileComponent,
  },
  {
    path: 'logout',
    canActivate:[AuthActivate],
    component: LogoutComponent,
  },
  {
    path: 'register',
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
