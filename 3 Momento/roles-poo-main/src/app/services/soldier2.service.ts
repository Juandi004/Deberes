import { Injectable } from '@angular/core';
import { Soldier } from '../models/soldier.model';

@Injectable({
  providedIn: 'root'
})
export class Soldier2Service {
  private soldier2: Soldier;

  constructor() {
    this.soldier2 = new Soldier(
      'Cabo Segundo',
      'Andrés',
      25,
      'Cuenca'
    );
  }

  getSoldier2(): Soldier {
    return this.soldier2;
  }

}