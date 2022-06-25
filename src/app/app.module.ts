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

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ConsultationAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
