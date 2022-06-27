import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm! : FormGroup;
  message : string = "";
  attente : boolean = false

  constructor(private auth : AuthService, private builder: FormBuilder, private router : Router) { }

  ngOnInit(): void {

    this.signInForm = new FormGroup(
      { email : new FormControl(),
        password : new FormControl()
       }
    )

    this.signInForm = this.builder.group(
      {
        email : ['', [Validators.email, Validators.required]],
        password : ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      }
    )
  }

  onSubmit(){

    this.attente = true;
    const email = this.signInForm.get("email")?.value;
    const password = this.signInForm.get("password")?.value;
    this.auth.signInUser(email, password).then(
      () => {
        this.attente = false;
        this.router.navigate(['/rdv']);
        console.log("Vous etes connecté !");
        
      },
      (error) => {
        this.attente = false;
        this.message = error;
      }
    );
  }
}
