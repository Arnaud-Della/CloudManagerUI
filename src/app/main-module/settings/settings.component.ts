import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CloudZoneSchema } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { ZoneCloudService } from 'src/app/services/zone-cloud.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent  implements OnInit,OnDestroy {

  public fileContent: any = undefined;
  @ViewChild("filename") 
  public filename!:ElementRef;
  public CloudZoneList:Array<CloudZoneSchema> = [];
  private subscriprionCloudZoneList!:Subscription;
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  constructor(private authService:AuthService,private zoneCloudService:ZoneCloudService){}

  ngOnDestroy(): void {
    this.subscriprionCloudZoneList.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriprionCloudZoneList = this.zoneCloudService.GetAllCloudZone(this.authService.userProfile).subscribe( ok => this.CloudZoneList = ok);
  }

  fileChangeEvent(event: any) {
    const file = event.target.files[0];
    this.filename.nativeElement.innerHTML = file.name;
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        this.fileContent = JSON.parse(e.target?.result as string) as CloudZoneSchema;
      }
      catch{
        this.fileContent = undefined;
      }
    };

    reader.readAsText(file);
  }

  AddFirstZone(email:string){
    let zone:CloudZoneSchema = {
    Email:email,
    Identifiant:this.authService.userProfile.identifiant as string,
    FirstZone:true,
    Config:this.fileContent
    }
    this.zoneCloudService.AddFirstZone(zone).then( () => this.CloudZoneList.push(zone));
  }

  AddSecondZone(){
    this.zoneCloudService.AddSecondZone();
  }

}
