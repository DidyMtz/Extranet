import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/index';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    
    return new Promise(
      (resolve,reject) => {

        const auth= getAuth();
        onAuthStateChanged(auth, (user)=>{

          if(user){
            resolve(true);
          }else{
            this.router.navigate(['/signin']);
            resolve(false);
          }
        });
        
      }
    )
  }
  

}
