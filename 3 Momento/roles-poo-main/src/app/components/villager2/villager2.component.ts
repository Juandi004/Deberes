import { Component, OnInit } from '@angular/core';
import { Villager2Service } from '../../services/villager2.service';
import { Villager } from '../../models/villager.model';

@Component({
  selector: 'app-villager2',
  templateUrl: './villager2.component.html',
  standalone: true,
  styleUrls: ['./villager2.component.css']
})
export class Villager2Component implements OnInit {
  villager2!: Villager;

  constructor(private villager2Service: Villager2Service) {}

  ngOnInit(): void {
    this.villager2 = this.villager2Service.getVillager2();
  }
}
