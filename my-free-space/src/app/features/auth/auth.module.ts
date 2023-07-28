import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports:[
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ]
})
export class AuthModule {}
