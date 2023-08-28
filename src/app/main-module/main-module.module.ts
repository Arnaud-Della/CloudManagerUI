import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CloudComponent } from './cloud/cloud.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    HomeComponent,
    CloudComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    MatSidenavModule,
    NbEvaIconsModule,
    NbIconModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MainModuleModule { }
