import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'

export const firebaseConfig = {
  apiKey: "AIzaSyAUwWn-lX9hARggO6M27ismgdB3PAAJsHE",
  authDomain: "auth-poc-1835e.firebaseapp.com",
  databaseURL: "https://auth-poc-1835e.firebaseio.com",
  projectId: "auth-poc-1835e",
  storageBucket: "auth-poc-1835e.appspot.com",
  messagingSenderId: "737884417586"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
