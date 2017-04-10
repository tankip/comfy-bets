import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public allGames: any;
  public isLogged: any;
  public admin: any;

  constructor(public gameServ: GamesService, public af: AngularFire) { 
    this.af.auth.subscribe(user => {
      if(user) {
        this.isLogged = user;
        this.checkAdmin(this.isLogged);
      } else {
        console.log('User Not Logged');
      }
    });
    this.gameServ.games.subscribe((data) => {
      this.allGames = data.reverse();
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
  
  delete(game) {
    this.gameServ.delete(game);
  }

  ngOnInit() {
  }

}
