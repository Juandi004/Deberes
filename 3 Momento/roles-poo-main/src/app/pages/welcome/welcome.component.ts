import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../services/major.service';
import { Major2Service } from '../../services/major2.service';
import { VillagerService } from '../../services/villager.service';
import { Villager2Service } from '../../services/villager2.service';
import { SuperheroService } from '../../services/superhero.service';
import { Superhero2Service } from '../../services/superhero2.service';
import { Major } from '../../models/major.model';
import { Villager } from '../../models/villager.model';
import { Superhero } from '../../models/superhero.model';
import { Monster } from '../../models/monster.model';
import { MajorComponent } from '../../components/major/major.component';
import { Major2Component } from '../../components/major2/major2.component';
import { VillagerComponent } from '../../components/villager/villager.component';
import { StoryComponent } from '../../components/story/story.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { Hero2Component } from '../../components/hero2/hero2.component';
import { Villager2Component } from '../../components/villager2/villager2.component';
import { MonsterComponent } from '../../components/monster/monster.component';
import { MonsterService } from '../../services/monster.service';
import { Monster2Component } from '../../components/monster2/monster2.component';
import { Monster2Service } from '../../services/monster2.service';
import { SoldierComponent } from '../../components/soldier/soldier.component';
import { SoldierService } from '../../services/soldier.service';
import { Soldier } from '../../models/soldier.model';
import { Soldier2Component } from '../../components/soldier2/soldier2.component';
import { Soldier2Service } from '../../services/soldier2.service';
import { Policeman } from '../../models/policeman.model';
import { PolicemanComponent } from '../../components/policeman/policeman.component';
import { PolicemanService } from '../../services/policeman.service';
import { Policeman2Service } from '../../services/policeman2.service';
import { Policeman2Component } from '../../components/policeman2/policeman2.component';
import { Farmer } from '../../models/farmer.model';
import { FarmerComponent } from '../../components/farmer/farmer.component';
import { FarmerService } from '../../services/farmer.service';
import { Farmer2Component } from '../../components/farmer2/farmer2.component';
import { Farmer2Service } from '../../services/farmer2.service';

@Component({
  selector: 'app-root',
  templateUrl: './welcome.component.html',
  standalone: true,
  styleUrls: ['./welcome.component.css'],
  imports: [MajorComponent, Major2Component ,VillagerComponent,Villager2Component , 
    StoryComponent, HeroComponent, Hero2Component, MonsterComponent, Monster2Component,
    SoldierComponent, Soldier2Component, PolicemanComponent, Policeman2Component,
    FarmerComponent, Farmer2Component]
})
export class AppComponent implements OnInit {
  majorName!: string;
  major2Name!: string;
  villagerName!: string;
  villager2Name!: string;
  superheroName!: string;
  superhero2Name!: string;
  monsterName!: string;
  monster2Name!: string;
  soldierName!: string;
  soldier2Name!: string;
  policemanName!: string;
  policeman2Name!: string;
  farmerName!: string;
  farmer2Name!: string;

  constructor(
    private majorService: MajorService,
    private major2Service: Major2Service,
    private villagerService: VillagerService,
    private villager2Service: Villager2Service,
    private superheroService: SuperheroService,
    private superhero2Service: Superhero2Service,
    private monsterService: MonsterService,
    private monster2Service: Monster2Service,
    private soldierService: SoldierService,
    private soldier2Service: Soldier2Service,
    private policemanService: PolicemanService,
    private policeman2Service: Policeman2Service,
    private famerService: FarmerService,
    private famer2Service: Farmer2Service
  ) {}

  ngOnInit(): void {
    const major: Major = this.majorService.getMajor();
    const major2: Major = this.major2Service.getMajor2();
    const villager: Villager = this.villagerService.getVillager();
    const villager2: Villager = this.villager2Service.getVillager2();
    const superhero: Superhero = this.superheroService.getHero();
    const superhero2: Superhero = this.superhero2Service.getHero2();
    const monster: Monster = this.monsterService.getMonster();
    const monster2: Monster = this.monster2Service.getMonster2();
    const soldier: Soldier = this.soldierService.getSoldier();
    const soldier2: Soldier = this.soldier2Service.getSoldier2();
    const policeman: Policeman = this.policemanService.getPoliceman();
    const policeman2: Policeman = this.policeman2Service.getPoliceman2();
    const farmer: Farmer = this.famerService.getFarmer();
    const farmer2: Farmer = this.famer2Service.getFarmer2();
    this.majorName = major.name;
    this.major2Name = major2.name;
    this.villagerName = villager.name;
    this.villager2Name = villager2.name;
    this.superheroName = superhero.name;
    this.superhero2Name = superhero2.name;
    this.monsterName = monster.name;
    this.monster2Name = monster2.name;
    this.soldierName = soldier.name;
    this.soldier2Name = soldier2.name;
    this.policemanName = policeman.name;
    this.policeman2Name = policeman2.name;
    this.farmerName = farmer.name;
    this.farmer2Name = farmer2.name;
  }
}
