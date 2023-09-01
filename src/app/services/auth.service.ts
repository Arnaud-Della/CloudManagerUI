import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenAccess:TokenAccess = {token:undefined,expiresIn:undefined};
  userProfile:User = {identifiant:undefined,password:undefined};

  constructor(private http:HttpClient) { }

  public async Login(user:User){
    return new Promise( (resolve, rejects) => {
      firstValueFrom(this.http.post<TokenAccess>(environment.endpoint+"/auth/sign-in",user)).then(
        ok => {
          this.userProfile = user;
          this.tokenAccess = ok;
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

}

export interface User
{
  identifiant:string | undefined,
  password:string | undefined,
}

export interface TokenAccess
{
  token:string | undefined,
  expiresIn:number | undefined,
}
