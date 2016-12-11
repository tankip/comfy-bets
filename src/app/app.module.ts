import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';

import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

import { LoginService } from './login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';

const firebaseConfig = {
  apiKey: "AIzaSyCZycQd5kVuyNhqb9YiLnWicC5n1wZR7Lg",
  authDomain: "comfy-bets.firebaseapp.com",
  databaseURL: "https://comfy-bets.firebaseio.com",
  storageBucket: "comfy-bets.appspot.com",
  messagingSenderId: "243930900717"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MainComponent,
    ManageGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
