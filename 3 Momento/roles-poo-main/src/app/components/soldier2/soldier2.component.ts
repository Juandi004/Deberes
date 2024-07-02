import { Component, OnInit } from '@angular/core';
import { Soldier2Service } from '../../services/soldier2.service';
import { Soldier } from '../../models/soldier.model';

@Component({
  selector: 'app-soldier2',
  templateUrl: './soldier2.component.html',
  standalone: true,
  styleUrls: ['./soldier2.component.css']
})
export class Soldier2Component implements OnInit {
  soldier2!: Soldier;

  constructor(private soldier2Service: Soldier2Service) {}

  ngOnInit(): void {
    this.soldier2 = this.soldier2Service.getSoldier2();
  }
}
