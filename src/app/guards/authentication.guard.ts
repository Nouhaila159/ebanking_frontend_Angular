import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state):
  boolean | UrlTree => {
  const injector = inject(AuthService);
  const router = inject(Router);

  if (injector.isAuthenticated == true) {
    return true;
  } else {
    return router.parseUrl('/login');
  }
};
