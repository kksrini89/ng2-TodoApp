import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { Firebaseauth } from "app/services/firebaseauth";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCJVjm_ljgXu06bDzTOO4pDxhdhWlwEPYM",
  authDomain: "todoapp-4d7ed.firebaseapp.com",
  databaseURL: "https://todoapp-4d7ed.firebaseio.com",
  storageBucket: "todoapp-4d7ed.appspot.com",
  messagingSenderId: "319585922803"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],  
  providers: [Firebaseauth],
  bootstrap: [AppComponent]
})
export class AppModule { }
