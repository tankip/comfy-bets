import { Component } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLogged: any;
  public admin: any;
  
  constructor(public af: AngularFire) { 
    this.af.auth.subscribe(user => {
      if(user) {
        this.isLogged = user;
        this.checkAdmin(this.isLogged);
      } else {
        console.log('User Not Logged');
      }
    });
  }
  checkAdmin(user) {
    if(user.google.email == 'rtankip@gmail.com') {
      this.admin =  true;
    } else {
      this.admin = false;
    }
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }
  
  logout() {
    this.af.auth.logout();
    this.isLogged = null;
    this.admin = false;
  }

}
