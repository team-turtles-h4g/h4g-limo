import { AuthService } from './../services/auth.service';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ){
  }

  ngOnInit(){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.getLoginState()){
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
