import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from "../features/auth/auth.module";
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AuthenticateComponent,
        ErrorComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AuthenticateComponent
    ],
    imports: [
        CommonModule,
        FeaturesModule,
        SharedModule,
        RouterModule,
        AuthModule
    ]
})
export class CoreModule { }
