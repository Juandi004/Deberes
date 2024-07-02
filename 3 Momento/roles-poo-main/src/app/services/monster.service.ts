import { Injectable } from '@angular/core';
import { Monster } from '../models/monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private monster: Monster;

  constructor() {
    this.monster = new Monster(
      'Zombies',
      25,
      'Guayaquil'
    );
  }

  getMonster(): Monster {
    return this.monster;
  }

}