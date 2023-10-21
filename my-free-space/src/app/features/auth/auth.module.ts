import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordValidatorDirective } from './register/passwordValidators/password-validator.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotVerifiedComponent } from './not-verified/not-verified.component';
import { VerifiedComponent } from './verified/verified.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    OwnerProfileComponent,
    LogoutComponent,
    PasswordValidatorDirective,
    NotVerifiedComponent,
    VerifiedComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    OwnerProfileComponent,
    LogoutComponent,
  ],
})
export class AuthModule {}
