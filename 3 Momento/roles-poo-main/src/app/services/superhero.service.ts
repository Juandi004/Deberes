import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero.model';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private hero: Superhero;

  constructor() {
    this.hero = new Superhero(
      'Bruce Wayne',
      'Batman',
      ['Habilidades de detective', 'conocimiento avanzado en artes marciales', 'y gadgets'],
      'Guayaquil'
    );
  }

  getHero(): Superhero {
    return this.hero;
  }

  fightCrime(): string {
    return this.hero.fightCrime();
  }

  displayPowers(): string {
    return this.hero.displayPowers();
  }
}