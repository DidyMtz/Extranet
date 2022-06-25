import { LoginComponent } from './admin/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : "", redirectTo:"signin", pathMatch : "full" },
  { path : "signin", component : SigninComponent },
  { path : "adminSignIn", component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
