import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent{

  fileContent: any;
  @ViewChild("filename")filename!:ElementRef;

  fileChangeEvent(event: any) {
    const file = event.target.files[0];
    this.filename.nativeElement.innerHTML = file.name;
    const reader = new FileReader();

    reader.onload = (e) => {
      this.fileContent = JSON.parse(e.target?.result as string);
      console.log(this.fileContent)
    };

    reader.readAsText(file);
  }

  AddFirstZone(email:string){

  }

}
