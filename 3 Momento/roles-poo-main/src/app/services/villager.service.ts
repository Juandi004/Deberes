import { Injectable } from '@angular/core';
import { Villager } from '../models/villager.model';
import { Major } from '../models/major.model';

@Injectable({
  providedIn: 'root'
})
export class VillagerService {
  private villager: Villager;

  constructor() {
    this.villager = new Villager(
      'Juan',
      20,
      'Guayaquil'
    );
  }

  getVillager(): Villager {
    return this.villager;
  }

  beingDominating(): string {
    return this.villager.dominate();
  }

}