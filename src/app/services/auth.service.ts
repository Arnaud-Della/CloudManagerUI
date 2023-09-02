import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenAccess:TokenAccess | undefined = undefined;
  userProfile:User = {identifiant:undefined};

  constructor(private http:HttpClient, private cookieService: CookieService) { 
  }

  public async Login(user:User){
    return new Promise( (resolve, rejects) => {
      firstValueFrom(this.http.post<TokenAccess>(environment.endpoint+"/auth/sign-in",user)).then(
        ok => {
          this.userProfile.identifiant = user.identifiant;
          this.tokenAccess = ok;
          this.cookieService.set('Id', String(user.identifiant));
          this.cookieService.set('Token', JSON.stringify(ok));
          resolve(ok);
        },
        ko => {
          rejects();
        }
      );
    });
  }

  public async Registration(user:User){
    return await firstValueFrom(this.http.post<any>(environment.endpoint+"/auth/sign-up",user));
  }

  public getTokenAccess(){
    if (!this.tokenAccess && this.cookieService.get('Token')){
      this.tokenAccess = JSON.parse(this.cookieService.get('Token'));
    }
    return this.tokenAccess;
  }

  public resetCookies(){
    this.tokenAccess = undefined;
    this.userProfile = {identifiant:undefined};
    this.cookieService.set('Id', String(this.userProfile.identifiant));
    this.cookieService.set('Token', JSON.stringify(this.tokenAccess));
  }
}

export interface User
{
  identifiant:string | undefined,
  password?:string|undefined
}

export interface TokenAccess
{
  token:string | undefined,
  expiresIn:number | undefined,
}
