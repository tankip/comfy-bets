import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogged: any;
  
  constructor(private _login: LoginService) {
    this.isLogged = this.checkAuth();
    if(this.isLogged) {
      console.log('Yes');
    }
  }

  checkAuth() {
    let user = this._login.checkAuth();
    if(user) {
      console.log('yes');
    }
  }

  signIn() {
    if(!this.isLogged) {
      this._login.signIn();
      this.isLogged = this._login.checkAuth();
    }
  }

  signOut() {
    this._login.signOut();
  }

  ngOnInit() {
  }

}
