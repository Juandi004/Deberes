import { Injectable } from '@angular/core';
import { Farmer } from '../models/farmer.model';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private farmer: Farmer;

  constructor() {
    this.farmer = new Farmer(
      'José',
      47,
      ['Manzanas', 'Peras', 'Uvas'],
      'Guayaquil'
    );
  }

  getFarmer(): Farmer {
    return this.farmer;
  }
}
