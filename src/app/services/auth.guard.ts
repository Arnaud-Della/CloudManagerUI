import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return true;
    // if (this.authService.tokenAccess.expiresIn && this.authService.tokenAccess.expiresIn>Math.floor(Date.now() / 1000) && this.authService.tokenAccess){
    //   return true;
    // }
    // else{
    //   this.router.navigate(['/auth']);
    //   return false;
    // }
  }
  
}
