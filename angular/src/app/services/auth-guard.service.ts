import { Injectable } from '@angular/core';
import { Router,RouterStateSnapshot,ActivatedRouteSnapshot,CanActivate,CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean { 
  	return this.auth.isAuthonticated().then(
  		(authSuccess: boolean) => {
			//   console.log(authSuccess);
  			if(authSuccess){
  				return true;
  			}else{
  				this.router.navigate(['/login']);
  			}
  	});
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
  	return this.canActivate(route, state);
  }
}