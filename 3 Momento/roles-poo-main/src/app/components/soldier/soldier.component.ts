import { Component, OnInit } from '@angular/core';
import { SoldierService } from '../../services/soldier.service';
import { Soldier } from '../../models/soldier.model';

@Component({
  selector: 'app-soldier',
  templateUrl: './soldier.component.html',
  standalone: true,
  styleUrls: ['./soldier.component.css']
})
export class SoldierComponent implements OnInit {
  soldier!: Soldier;

  constructor(private soldierService: SoldierService) {}

  ngOnInit(): void {
    this.soldier = this.soldierService.getSoldier();
  }
}
