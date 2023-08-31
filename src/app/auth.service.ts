import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public Login(user:User):Observable<TokenAccess>{
    return this.http.post<TokenAccess>(environment.endpoint+"/auth/sign-in",user);
  }

}

export interface User
{
  identifiant:string,
  password:string,
}

export interface TokenAccess
{
  token:string,
  expiresIn:number,
}
