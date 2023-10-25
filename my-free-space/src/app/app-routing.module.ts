import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { ContentComponent } from './features/content/content.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/error/error.component';
import { NotVerifiedGuard } from './core/guards/not-verified.activate';
import { HomeComponent } from './features/home/home.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: ContentComponent,
    children: [
      { path: '', canActivate: [NotVerifiedGuard], component: HomeComponent },
    ],
  },
  {
    path: 'about',
    canActivate: [NotVerifiedGuard],
    component: AboutComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path: 'dest',
    loadChildren: () =>
      import('./features/destinations/destination-routing.module').then(
        (m) => m.DestinationRoutingModule
      ),
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    canActivate: [NotVerifiedGuard],
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
