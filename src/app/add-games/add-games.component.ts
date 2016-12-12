import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

class GameTip {
  public country: string;
  public competition: string;
  public hometeam: string;
  public awayteam: string;
  public prediction: string;
  public result: string;
  public pick: string;
  public time;
  constructor() {
    this.country = '';
    this.competition = '';
    this.hometeam = '';
    this.awayteam = '';
    this.prediction = '';
    this.result = 'Pending';
    this.pick = '';
    this.time = Date.now();
  }
}

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {

  game: GameTip;

  constructor(public gameServ: GamesService) { 
    this.game = new GameTip();
  }

  save() { 
    let key = this.gameServ.save(this.game);
    if(key) {
      alert("Successfully Added Game");
    } else {
      alert("Sorry! Game not added");
    }
    this.game = new GameTip();
  }

  ngOnInit() {
  }

}
