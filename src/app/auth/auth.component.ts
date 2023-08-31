import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  errorConnexion:boolean = false;

  constructor(private authService:AuthService,private router:Router) { }

  public Login(id:HTMLInputElement,mdp:HTMLInputElement){
    this.authService.Login({identifiant:id.value,password:mdp.value}).subscribe(
      ok => {
        this.errorConnexion = false;
        this.router.navigate(['/home']);
      },
      ko => {
        this.errorConnexion = true;
      }
    )
  }

}
