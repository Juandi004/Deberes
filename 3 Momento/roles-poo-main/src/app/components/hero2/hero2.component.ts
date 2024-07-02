import { Component, OnInit } from '@angular/core';
import { Superhero2Service } from '../../services/superhero2.service';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  standalone: true,
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component implements OnInit {
  hero2!: Superhero;
  crimeMessage!: string;
  powersMessage!: string;

  constructor(private superhero2Service: Superhero2Service) {}

  ngOnInit(): void {
    this.hero2 = this.superhero2Service.getHero2();
    this.crimeMessage = this.superhero2Service.fightCrime();
    this.powersMessage = this.superhero2Service.displayPowers();
  }
}
