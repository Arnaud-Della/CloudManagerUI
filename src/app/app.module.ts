import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthComponent } from './auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainModuleModule } from './main-module/main-module.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NotfoundComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    MainModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
