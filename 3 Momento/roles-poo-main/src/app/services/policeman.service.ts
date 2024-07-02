import { Injectable } from '@angular/core';
import { Policeman } from '../models/policeman.model';

@Injectable({
  providedIn: 'root'
})
export class PolicemanService {
  private policeman: Policeman;

  constructor() {
    this.policeman = new Policeman(
      'Fernando',
      32,
      'Guayaquil'
    );
  }

  getPoliceman(): Policeman {
    return this.policeman;
  }

}