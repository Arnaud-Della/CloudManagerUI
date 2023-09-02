import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class StandartInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le jeton d'accès depuis le stockage (localStorage, sessionStorage, etc.)
    const accessToken = this.authService.getTokenAccess()?.token;
    const accessTokenExpire = this.authService.getTokenAccess()?.expiresIn;

    // Vérifier si un jeton d'accès est disponible
    if (accessToken && accessTokenExpire && accessTokenExpire>Math.floor(Date.now() / 1000)) {
      // Cloner la requête et ajouter l'en-tête d'autorisation Bearer
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Poursuivre le traitement de la requête avec l'en-tête d'autorisation ajouté
      return next.handle(modifiedRequest);
    }

    // Si aucun jeton d'accès n'est disponible, poursuivre simplement avec la requête d'origine
    this.authService.resetCookies();
    this.router.navigate(['/auth']);
    return next.handle(request);
  }
}
