import { Component, OnInit } from '@angular/core';
import { PolicemanService } from '../../services/policeman.service';
import { Policeman } from '../../models/policeman.model';

@Component({
  selector: 'app-policeman',
  templateUrl: './policeman.component.html',
  standalone: true,
  styleUrls: ['./policeman.component.css']
})
export class PolicemanComponent implements OnInit {
  policeman!: Policeman;

  constructor(private policemanService: PolicemanService) {}

  ngOnInit(): void {
    this.policeman = this.policemanService.getPoliceman();
  }
}
