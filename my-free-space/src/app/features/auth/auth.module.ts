import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordValidatorDirective } from './register/passwordValidators/password-validator.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotVerifiedComponent } from './not-verified/not-verified.component';
import { VerifiedComponent } from './verified/verified.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    PasswordValidatorDirective,
    NotVerifiedComponent,
    VerifiedComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  exports: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ],
})
export class AuthModule {}
