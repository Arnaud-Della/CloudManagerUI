import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenAccess:TokenAccess = {token:undefined,expiresIn:undefined};
  //userProfile:User = {identifiant:undefined,password:undefined};

  constructor(private http:HttpClient) { }

  public async Login(user:User){
    this.tokenAccess = await firstValueFrom(this.http.post<TokenAccess>(environment.endpoint+"/auth/sign-in",user));
    return this.tokenAccess;
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
