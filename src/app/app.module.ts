import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ConsultationAdmComponent } from './admin/consultation-adm/consultation-adm.component';
import { ClientComponent } from './admin/client/client.component';
import { UserComponent } from './admin/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RdvComponent } from './user/rdv/rdv.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ConsultationAdmComponent,
    ClientComponent,
    UserComponent,
    RdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,    
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
