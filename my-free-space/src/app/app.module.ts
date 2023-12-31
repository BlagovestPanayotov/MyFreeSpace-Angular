import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppInterceptorProvider } from './app-interceptor.interceptor';
import { GlobalErrorHandlerProvider } from './core/globalErrorHandlers/globalErrorHandler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [AppInterceptorProvider, GlobalErrorHandlerProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
