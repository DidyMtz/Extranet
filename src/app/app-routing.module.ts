import { RdvComponent } from './user/rdv/rdv.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './admin/user/user.component';
import { ClientComponent } from './admin/client/client.component';
import { LoginComponent } from './admin/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path : "", redirectTo:"signin", pathMatch : "full" },
  { path : "**", redirectTo:"signin", pathMatch : "full" },
  { path : "signin", component : SigninComponent },
  { path : "signup", canActivate:[AuthGuardService], component : SignupComponent },
  { path : "adminSignIn", canActivate:[AuthGuardService], component : LoginComponent },
  { path : "client", canActivate:[AuthGuardService], component : ClientComponent },
  { path : "user", canActivate:[AuthGuardService], component : UserComponent },
  { path : "rdv", canActivate:[AuthGuardService], component : RdvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
