import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-manage-games',
  templateUrl: './manage-games.component.html',
  styleUrls: ['./manage-games.component.css']
})
export class ManageGamesComponent implements OnInit {
  
  public pendingGames: any;

  constructor(public gameServ: GamesService) { 
     this.gameServ.games.subscribe((data) => {
       let arr = [];
       data.forEach((value) => {
         if(value.result == 'Pending') {
           arr.push(value);
         }
       });
       this.pendingGames = arr.reverse();
     });
  }

  won(game) {
    let result = 'Won'
    this.gameServ.update(game, result);
  }

  lost(game) {
    let result = 'Lost'
    this.gameServ.update(game, result);
  }

  ngOnInit() {
  }

}
