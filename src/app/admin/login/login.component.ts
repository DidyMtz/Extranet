import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  message : string = "";
  attente : boolean = false; 

  constructor(private auth: AuthService, private router: Router, private formbuiler : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){

    this.loginForm = new FormGroup(
      {
        email: new FormControl(),
        password : new FormControl()
      }
    );

    this.loginForm = this.formbuiler.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      }
    );

  }
  onSubmit(){
   
    this.attente = true
    const email = this.loginForm.get("email")?.value;
    const password = this.loginForm.get("password")?.value;
    this.auth.signInUser(email, password).then(
      () => {

        this.attente = false;
        this.router.navigate(['/client'])
        
      },
      (error) =>{
        this.attente = false;
        this.message = error;
      }
    )
  }

}
