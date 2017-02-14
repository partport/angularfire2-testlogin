import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { routing } from './app.routing';

import { AngularFireModule,
        AuthProviders,
        AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// Export config
export const myFirebaseConfig = {
  apiKey: "AIzaSyCo7Cym3Xr2JQP4iGHNtejWlyX-19INNFE",
  authDomain: "mytestdata-8cf6a.firebaseapp.com",
  databaseURL: "https://mytestdata-8cf6a.firebaseio.com",
  storageBucket: "mytestdata-8cf6a.appspot.com",
  messagingSenderId: "321165889642"
};
const myFirebaseAuthConfig={
  provider:AuthProviders.Google,
  method:AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    Angular2FontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig,myFirebaseAuthConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
