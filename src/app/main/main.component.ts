import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public todayGames: any;
  public lastGames: any;

  constructor(public gameServ: GamesService) { 
    this.gameServ.games.subscribe((data) => {
      let arr = [];
      let last = [];
       data.forEach((value) => {
         if(value.result == 'Pending' && value.pick == 'normal') {
           arr.push(value);
         } else if(value.result == 'Won') {
           last.push(value);
         }
       });
      this.todayGames = arr.reverse();
      this.lastGames = last.reverse();
    });
  }

  ngOnInit() {
  }

}
