import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthServiceService).isLoggedIn() ? true : inject(Router).createUrlTree(['/login'])
};
