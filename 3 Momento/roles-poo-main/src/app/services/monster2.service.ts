import { Injectable } from '@angular/core';
import { Monster } from '../models/monster.model';

@Injectable({
  providedIn: 'root'
})
export class Monster2Service {
  private monster2: Monster;

  constructor() {
    this.monster2 = new Monster(
      'Vampiros',
      45,
      'Cuenca'
    );
  }

  getMonster2(): Monster {
    return this.monster2;
  }

}