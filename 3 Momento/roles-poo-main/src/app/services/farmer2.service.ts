import { Injectable } from '@angular/core';
import { Farmer } from '../models/farmer.model';

@Injectable({
  providedIn: 'root'
})
export class Farmer2Service {
  private farmer2: Farmer;

  constructor() {
    this.farmer2 = new Farmer(
      'Mateo',
      54,
      ['Poroto', 'Abas', 'Lechuga'],
      'Cuenca'
    );
  }

  getFarmer2(): Farmer {
    return this.farmer2;
  }
}
