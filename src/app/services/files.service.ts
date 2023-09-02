import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { firstValueFrom } from 'rxjs';
import { File } from '../main-module/cloud/cloud.component';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { }

  public async getFiles(directory:string):Promise<File>{
    return firstValueFrom(this.http.get<File>(environment.endpoint+"/files/getfiles/"+directory));
  }
}
