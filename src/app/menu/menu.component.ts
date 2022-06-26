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
  
  constructor() { }

  ngOnInit(): void {

  this.loggedIn();

  }

  loggedIn(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if(user){return true;}
      else{ return false;}
    });
  }
}
