import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-best-games',
  templateUrl: './best-games.component.html',
  styleUrls: ['./best-games.component.css']
})
export class BestGamesComponent implements OnInit {
  
  public bestGames: any;

  constructor(public gameServ: GamesService) { 
     this.gameServ.games.subscribe((data) => {
       let arr = [];
       data.forEach((value) => {
         if(value.result == 'Pending' && value.pick == 'best') {
           arr.push(value);
         }
       });
       this.bestGames = arr.reverse();
     });
  }

  ngOnInit() {
  }

}
