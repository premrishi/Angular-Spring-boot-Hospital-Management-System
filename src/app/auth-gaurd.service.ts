import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

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
}
