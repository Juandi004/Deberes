import { Injectable } from '@angular/core';
import { Villager } from '../models/villager.model';

@Injectable({
  providedIn: 'root'
})
export class Villager2Service {
  private villager2: Villager;

  constructor() {
    this.villager2 = new Villager(
      'Josue',
      20,
      'Cuenca'
    );
  }

  getVillager2(): Villager {
    return this.villager2;
  }

  beingDominating(): string {
    return this.villager2.dominate();
  }

}