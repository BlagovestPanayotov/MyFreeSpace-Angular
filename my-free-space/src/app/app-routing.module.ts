import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/auth/profile/profile.component';
import { CreateDestinationComponent } from './features/destinations/create-destination/create-destination.component';
import { AboutComponent } from './features/about/about.component';
import { LogoutComponent } from './features/auth/logout/logout.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ContentComponent } from './features/content/content.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:ContentComponent
  },
  {
    path:'home',
    component:ContentComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'user-list',
    component:ContentComponent
  },
  {
    path:'posts-list',
    component:ContentComponent
  },
  {
    path:'create',
    component:CreateDestinationComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
