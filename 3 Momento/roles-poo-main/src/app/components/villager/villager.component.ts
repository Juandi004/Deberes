import { Component, OnInit } from '@angular/core';
import { VillagerService } from '../../services/villager.service';
import { Villager } from '../../models/villager.model';

@Component({
  selector: 'app-villager',
  templateUrl: './villager.component.html',
  standalone: true,
  styleUrls: ['./villager.component.css']
})
export class VillagerComponent implements OnInit {
  villager!: Villager;

  constructor(private villagerService: VillagerService) {}

  ngOnInit(): void {
    this.villager = this.villagerService.getVillager();
  }
}
