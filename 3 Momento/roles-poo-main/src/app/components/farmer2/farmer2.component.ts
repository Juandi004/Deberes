import { Component, OnInit } from '@angular/core';
import { Farmer2Service } from '../../services/farmer2.service';
import { Farmer } from '../../models/farmer.model';

@Component({
  selector: 'app-farmer2',
  templateUrl: './farmer2.component.html',
  standalone: true,
  styleUrls: ['./farmer2.component.css']
})
export class Farmer2Component implements OnInit {
  farmer2!: Farmer;

  constructor(private farmer2Service: Farmer2Service) {}

  ngOnInit(): void {
    this.farmer2 = this.farmer2Service.getFarmer2();
  }
}
