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
    const accessToken = this.authService.getTokenAccess()?.token;
    const accessTokenExpire = this.authService.getTokenAccess()?.expiresIn;
    // Vérifier si un jeton d'accès est disponible
    if (accessToken && accessTokenExpire && accessTokenExpire>Math.floor(Date.now() / 1000)) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
    
  }
  
}
