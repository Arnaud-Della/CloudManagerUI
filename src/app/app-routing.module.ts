import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'home', loadChildren: () => import("./main-module/main-module.module").then(m => m.MainModuleModule),canActivate: [AuthGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
