import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerFormGroup!: FormGroup;
  message : string = "" ;


  constructor(private auth: AuthService, private builder: FormBuilder) { }

  ngOnInit(): void {

    this.registerFormGroup = new FormGroup(
      {
        email : new FormControl(),
        password : new FormControl(),
        role : new FormControl()
      }
    );

    this.registerFormGroup = this.builder.group(
      {
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required,Validators.pattern(/[a-zA-Z0-9]{6,}/)]],
        role : ['',Validators.required]
      }
    )
  }


  onRegister(){

    var defaultrole;
    const email = this.registerFormGroup.get("email")?.value;
    const password = this.registerFormGroup.get("password")?.value;
    const role = this.registerFormGroup.get("role")?.value;
    if(role ===""){defaultrole = "user";}else{defaultrole = role;}
    const ID = defaultrole+" "+email;

    this.auth.createNewUser(ID,password).then(
     () => {
      this.message = "Utilisateur crée avec succès";
     },
     (error) => {
      this.message = error;

     }
    );  
    
  }
}
