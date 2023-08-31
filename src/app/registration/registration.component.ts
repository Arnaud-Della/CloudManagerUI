import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  @ViewChild("error")error!:ElementRef;

  constructor(private authService:AuthService,private router:Router){}

  public Registration(Identifiant:HTMLInputElement,MDP:HTMLInputElement,ConfirmationMDP:HTMLInputElement){
    
    if (Identifiant.value != "" &&
        MDP.value!= "" &&
        MDP.value == ConfirmationMDP.value)
    {
      this.authService.Registration({identifiant:Identifiant.value,password:MDP.value}).then(
        ok => {
          this.router.navigate(['/auth'])
        },
        ko => {
          this.error.nativeElement.innerHTML = "Une erreur est survenue";
        }
      );
    }
    else{
      this.error.nativeElement.innerHTML = "Mot de passe different";
    }
  }
}
