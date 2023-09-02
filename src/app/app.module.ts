import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainModuleModule } from './main-module/main-module.module';
import { RegistrationComponent } from './registration/registration.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { StandartInterceptor } from './standart.interceptor';

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
    MainModuleModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: StandartInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
