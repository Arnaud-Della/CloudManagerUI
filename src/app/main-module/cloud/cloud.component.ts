import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  filesStackUI:any[] = [];

  constructor(private filesService:FilesService) { }

  ngOnInit(): void {
    this.filesService.getFiles("root")
    .then((result:File) => {
      this.filesStackUI.push(result);
    })
  }

  DisplayFiles(){
    return this.filesStackUI[this.filesStackUI.length -1];
  }

}

export interface File
{
  name:string,
  id:string,
  dir?:boolean
}
