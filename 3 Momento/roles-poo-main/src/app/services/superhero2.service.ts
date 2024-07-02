import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero.model';

@Injectable({
  providedIn: 'root'
})
export class Superhero2Service {
  private hero2: Superhero;

  constructor() {
    this.hero2 = new Superhero(
      'Tony Stark',
      'Iron-Man',
      ['Genio', 'millonario', 'playboy', 'y filántropo'],
      'Cuenca'
    );
  }

  getHero2(): Superhero {
    return this.hero2;
  }

  fightCrime(): string {
    return this.hero2.fightCrime();
  }

  displayPowers(): string {
    return this.hero2.displayPowers();
  }
}