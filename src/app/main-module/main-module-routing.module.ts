import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'cloud', // child route path
        component: CloudComponent, // child route component that the router renders
        outlet:'aux'
      },
      {
        path: 'setting', // child route path
        component: SettingsComponent, // child route component that the router renders
        outlet:'aux'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
