import { Component, OnInit } from '@angular/core';
import { Policeman2Service } from '../../services/policeman2.service';
import { Policeman } from '../../models/policeman.model';

@Component({
  selector: 'app-policeman2',
  templateUrl: './policeman2.component.html',
  standalone: true,
  styleUrls: ['./policeman2.component.css']
})
export class Policeman2Component implements OnInit {
  policeman2!: Policeman;

  constructor(private policeman2Service: Policeman2Service) {}

  ngOnInit(): void {
    this.policeman2 = this.policeman2Service.getPoliceman2();
  }
}
