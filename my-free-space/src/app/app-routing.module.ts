import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { ContentComponent } from './features/content/content.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  };

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContentComponent,
  },
  {
    path: 'home',
    component: ContentComponent,
  },
  {
    path: 'about',
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
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
