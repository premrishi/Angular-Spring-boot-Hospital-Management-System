import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate {

  constructor(private router: Router, private authService: AdminauthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean>{
    if (this.authService.isUserLoggedIn()) 
    {
      return true;
    }

    else{

    this.router.navigate(['home']);
    return false;

    }
}
