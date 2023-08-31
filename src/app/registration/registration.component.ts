import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  @ViewChild('Identifiant') Identifiant!: ElementRef;
  @ViewChild('MDP') MDP!: ElementRef;
  @ViewChild('ConfimationMDP') ConfimationMDP!: ElementRef;

  public Validation(){
    if (this.Identifiant.nativeElement.value != "" && this.MDP.nativeElement.value != ""
        && (this.ConfimationMDP.nativeElement.value == this.MDP.nativeElement.value)){

      // valide
    }
    else{
      // ne valide pas
    }
  }
}
