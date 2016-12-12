import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   public allGames: any;

  constructor(public gameServ: GamesService) { 
    this.gameServ.games.subscribe((data) => {
      this.allGames = data.reverse();
    });
  }
  
  delete(game) {
    this.gameServ.delete(game);
  }

  ngOnInit() {
  }

}
