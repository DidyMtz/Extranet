import { RdvComponent } from './user/rdv/rdv.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './admin/user/user.component';
import { ClientComponent } from './admin/client/client.component';
import { LoginComponent } from './admin/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : "", redirectTo:"signin", pathMatch : "full" },
  { path : "signin", component : SigninComponent },
  { path : "signup", component : SignupComponent },
  { path : "adminSignIn", component : LoginComponent },
  { path : "client", component : ClientComponent },
  { path : "user", component : UserComponent },
  { path : "rdv", component : RdvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
