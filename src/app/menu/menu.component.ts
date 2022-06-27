import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userType : any ='';
  isAuth!: boolean;
  
  constructor(private auth: AuthService, private router : Router) { }

  ngOnInit(): void {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {

          this.isAuth = true;
        } else {

          this.isAuth = false;
        }
    });
    console.log(this.isAuth);
    
  }


  signOut(){
    
    this.auth.signOutUser();
    this.router.navigate(['/signin'])
  }

  }

  