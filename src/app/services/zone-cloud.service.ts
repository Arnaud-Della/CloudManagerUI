import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CloudZoneSchema } from '../interfaces/interfaces';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService, User } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZoneCloudService {

  constructor(private http:HttpClient,private authService:AuthService,private router:Router) {}

  public AddFirstZone(FirstZone:CloudZoneSchema):Promise<any>{
    return firstValueFrom(this.http.post<any>(environment.endpoint+"/cloud/addfirstcloud",FirstZone));
  }

  public AddSecondZone(){
    firstValueFrom(this.http.get<any>(environment.endpoint+"/cloud/drive-connection/"+this.authService.userProfile.identifiant))
    .then( (res) => {
      window.location.href = res.uri;
    });
  }

  public GetAllCloudZone(user:User):Observable<CloudZoneSchema[]>{
    return this.http.post<CloudZoneSchema[]>(environment.endpoint+"/cloud/getAll",user);
  }
}
