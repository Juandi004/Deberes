import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../../services/monster.service';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  standalone: true,
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  monster!: Monster;

  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.monster = this.monsterService.getMonster();
  }
}
