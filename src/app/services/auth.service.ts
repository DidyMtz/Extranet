import { Injectable } from '@angular/core';
import { getAuth,signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(
          () => {
            resolve("Connexion réussie !");
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }


  signInUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(
          () => {
            resolve("Vous etes connecté(e) !")
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }


  signOutUser(){
    const auth = getAuth();
    signOut(auth).then(
      () => {
      console.log("Vous etes déconnecté(e)");
      
       }     
    ).catch(
      (error) => {
      throw error;
    });
  }



  
}
