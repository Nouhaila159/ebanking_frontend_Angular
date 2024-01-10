 import { Component } from '@angular/core';
 import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn, Router,
  RouterStateSnapshot,
  Routes,
  UrlTree
} from "@angular/router";
 import {Observable} from "rxjs";
 import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.css'
})
export class NotAuthorizedComponent implements CanActivate{
  constructor(private authService : AuthService,private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.roles.includes("ADMIN")){
      return true;
    }
    else {
      this.router.navigateByUrl("/admin/notAuthorized")
      return false;
    }
  }

}
