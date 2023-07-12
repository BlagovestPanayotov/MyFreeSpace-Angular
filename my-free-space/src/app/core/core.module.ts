import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class CoreModule { }
