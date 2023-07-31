import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HasLowerCaseDirective } from './register/passwordValidators/has-lower-case.directive';
import { HasUpperCaseDirective } from './register/passwordValidators/has-upper-case.directive';
import { HasNumericDirective } from './register/passwordValidators/has-numeric-case.directive';
import { HasSpecCharDirective } from './register/passwordValidators/has-spec-char.directive';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    HasLowerCaseDirective,
    HasUpperCaseDirective,
    HasNumericDirective,
    HasSpecCharDirective,
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
