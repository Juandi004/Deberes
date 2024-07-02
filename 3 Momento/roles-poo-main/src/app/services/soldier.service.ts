import { Injectable } from '@angular/core';
import { Soldier } from '../models/soldier.model';

@Injectable({
  providedIn: 'root'
})
export class SoldierService {
  private soldier: Soldier;

  constructor() {
    this.soldier = new Soldier(
      'Teniente General',
      'Sebastian',
      60,
      'Guayaquil'
    );
  }

  getSoldier(): Soldier {
    return this.soldier;
  }

}