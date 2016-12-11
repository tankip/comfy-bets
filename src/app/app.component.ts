import { Component } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public isLogged: any;
  public admin: any;
  
  constructor(private _login: LoginService, public af: AngularFire) { 
    this.af.auth.subscribe(user => {
      if(user) {
        this.isLogged = user;
        this.checkAdmin(this.isLogged);
      } else {
        console.log('User found');
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
