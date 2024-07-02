import { Component, OnInit } from '@angular/core';
import { Monster2Service } from '../../services/monster2.service';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-monster2',
  templateUrl: './monster2.component.html',
  standalone: true,
  styleUrls: ['./monster2.component.css']
})
export class Monster2Component implements OnInit {
  monster2!: Monster;

  constructor(private monster2Service: Monster2Service) {}

  ngOnInit(): void {
    this.monster2 = this.monster2Service.getMonster2();
  }
}
