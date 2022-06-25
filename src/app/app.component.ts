import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Extranet';

  constructor(){
const firebaseConfig = {
  apiKey: "AIzaSyADdGRjmsYDMY2XD9Fqx41PqSTWuDB7HWM",
  authDomain: "dico1-2df3f.firebaseapp.com",
  databaseURL: "https://dico1-2df3f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dico1-2df3f",
  storageBucket: "dico1-2df3f.appspot.com",
  messagingSenderId: "870773408089",
  appId: "1:870773408089:web:fb61f9b9c6337a4985cc48",
  measurementId: "G-H6D3EWY55G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}
}
