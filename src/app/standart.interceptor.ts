import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class StandartInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le jeton d'accès depuis le stockage (localStorage, sessionStorage, etc.)
    const accessToken = this.authService.tokenAccess.token;

    // Vérifier si un jeton d'accès est disponible
    if (accessToken) {
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
    return next.handle(request);
  }
}
