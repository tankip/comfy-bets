import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import * as firebase from 'firebase';

import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";
import { Ng2PaginationModule } from 'ng2-pagination'; 

import { GamesService } from './games.service';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { BestGamesComponent } from './best-games/best-games.component';
import { HomeComponent } from './home/home.component';
import { TodaysComponent } from './todays/todays.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
    AdminComponent,
    MainComponent,
    ManageGamesComponent,
    AddGamesComponent,
    BestGamesComponent,
    HomeComponent,
    TodaysComponent,
    HistoryComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'me',
        component: AdminComponent
      }
    ]),
    Ng2PaginationModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
