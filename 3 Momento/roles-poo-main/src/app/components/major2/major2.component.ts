import { Component, OnInit } from '@angular/core';
import { Major2Service } from '../../services/major2.service';
import { Major } from '../../models/major.model';

@Component({
  selector: 'app-major2',
  templateUrl: './major2.component.html',
  standalone: true,
  styleUrls: ['./major2.component.css']
})
export class Major2Component implements OnInit {
  major2!: Major;

  constructor(private major2Service: Major2Service) {}

  ngOnInit(): void {
    this.major2 = this.major2Service.getMajor2();
  }
}
