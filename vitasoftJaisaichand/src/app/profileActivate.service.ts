import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(){
    if (localStorage.getItem('currently')) {
        return true;  
    }else{
        this.router.navigate(['signuporlogin']);
      return false;
    }
    
  }
}