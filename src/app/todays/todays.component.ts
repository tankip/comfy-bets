import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.css']
})
export class TodaysComponent implements OnInit {
  
  public todayGames: any;

  constructor(public gameServ: GamesService) {
    this.gameServ.games.subscribe((data) => {
      let arr = [];
       data.forEach((value) => {
         if(value.result == 'Pending' && value.pick == 'normal') {
           arr.push(value);
         }
       });
      this.todayGames = arr.reverse();
    });
   }

  ngOnInit() {
  }

}
