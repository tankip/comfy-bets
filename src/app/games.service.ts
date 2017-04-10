import { Injectable } from '@angular/core';

import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GamesService {
  
  public loadegames: Observable<any[]>;

  constructor(public af: AngularFire) { }

  get games() {
    return this.af.database.list('/games');
  }

  save(game) {
    return this.af.database.list('/games').push(game).key;
  }

  update(game, result) {
    this.af.database.object('/games/'+game).update({result: result});
  }

  delete(game) {
    this.af.database.object('/games/'+game).remove();
  }

}
