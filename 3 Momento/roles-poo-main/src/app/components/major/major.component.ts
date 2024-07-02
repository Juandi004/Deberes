import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../services/major.service';
import { Major } from '../../models/major.model';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  standalone: true,
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {
  major!: Major;

  constructor(private majorService: MajorService) {}

  ngOnInit(): void {
    this.major = this.majorService.getMajor();
  }
}
