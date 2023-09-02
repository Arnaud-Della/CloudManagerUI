import { Component, Input, OnInit } from '@angular/core';
import { File } from '../cloud/cloud.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input("info")Info!:File;
  fileType!:string;
  FileType = FileType;

  ngOnInit(): void {
    if (this.Info.name.includes(".")){
      this.fileType = this.Info.name.split(".")[this.Info.name.split(".").length - 1];
    }
    if (this.Info.dir){
      this.fileType = FileType.Dir;
    }
    else{
      this.fileType = FileType.File;
    }
  }
}

export enum FileType{
  Dir = "dir",
  Pdf = "pdf",
  Word = "docx",
  File = "",
}
