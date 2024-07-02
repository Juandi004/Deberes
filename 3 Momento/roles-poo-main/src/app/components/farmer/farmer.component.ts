import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';
import { Farmer } from '../../models/farmer.model';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  standalone: true,
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  farmer!: Farmer;

  constructor(private farmerService: FarmerService) {}

  ngOnInit(): void {
    this.farmer = this.farmerService.getFarmer();
  }
}
