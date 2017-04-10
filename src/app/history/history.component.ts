import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public lastGames: any

  constructor(public gameServ: GamesService) { 
    this.gameServ.games.subscribe((data) => {
      let last = [];
       data.forEach((value) => {
         if(value.result == 'Won') {
           last.push(value);
         }
       });
      this.lastGames = last.reverse();
    });
  }

  ngOnInit() {
  }

}
