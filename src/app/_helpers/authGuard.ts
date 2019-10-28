import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../../app/_services/authantication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router : Router,private authantication:AuthenticationService){

  }
  
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const currentUser = this.authantication.currentuservalue;
    if(currentUser){
      return true;
    }
    else{

    }
    this.router.navigate(['/login'],{queryParams:{returnurl:state.url}});
    return false;
  }
 
}