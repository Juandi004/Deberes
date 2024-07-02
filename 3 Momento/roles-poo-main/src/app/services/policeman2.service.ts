import { Injectable } from '@angular/core';
import { Policeman } from '../models/policeman.model';

@Injectable({
  providedIn: 'root'
})
export class Policeman2Service {
  private policeman2: Policeman;

  constructor() {
    this.policeman2 = new Policeman(
      'Luisa',
      26,
      'Cuenca'
    );
  }

  getPoliceman2(): Policeman {
    return this.policeman2;
  }

}