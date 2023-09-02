import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    firstValueFrom(this.http.get<any>(environment.endpoint+"/cloud/drive-connection"))
    .then( (res) => {
      window.location.href = res.uri;
    });
  }

  public GetAllCloudZone(user:User):Observable<CloudZoneSchema[]>{
    return this.http.post<CloudZoneSchema[]>(environment.endpoint+"/cloud/getAll",user);
  }

  public DeleteCloudZone(email:string){
    const optionsHttp = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {email:email}, // Les données que vous souhaitez envoyer dans le corps de la requête
    };
    return firstValueFrom(this.http.delete<CloudZoneSchema>(environment.endpoint+"/cloud/DeleteCloudZone",optionsHttp));
  }
}
