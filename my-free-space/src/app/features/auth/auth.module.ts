import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ],
})
export class AuthModule {}
