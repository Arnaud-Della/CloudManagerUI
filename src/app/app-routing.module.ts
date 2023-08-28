import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './main-module/home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', loadChildren: () => import("./main-module/main-module.module").then(m => m.MainModuleModule)},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
