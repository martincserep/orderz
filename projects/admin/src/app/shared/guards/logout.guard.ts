import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../features/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.loginService.loggedIn) {
        return true;
      }
        
      return this.router.createUrlTree(['/']);
  }
  constructor(
    private router: Router,
    private loginService: LoginService) { }
}
