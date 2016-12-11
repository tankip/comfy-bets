import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { AngularFire, AuthProviders } from 'angularfire2';

@Injectable()
export class LoginService {

  private _db: any;
  private _provider: any;
  public auth: any;
  public userDetails: any;


  constructor(public http: Http, public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user) {
        console.log(user);
      } else {
        console.log('User found');
      }
    });
  }
  
 checkAdmin(email, user) {
   console.log(email);
 }

 checkAuth() {
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) { 
        return true;
      } else {
        return false;
      }
    });
 }

  signIn() {
    return firebase.auth().signInWithPopup(this._provider).then((response) => {
      return true;
    }).catch((error) => {
      return false;
    });
  }

  signOut() {
    return firebase.auth().signOut().then(() => {
      return true;
    }).catch((error) => {
      return false;
    });
  }

}
