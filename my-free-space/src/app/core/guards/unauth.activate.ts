import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    debugger;
    console.log(this.userService.isLogged);
    
    if (!this.userService.isLogged) {
      return true; // Allow access to the route
    }

    // Redirect authenticated users to a different page (e.g., home)
    return this.router.createUrlTree(['/home']);
  }
}
