import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NasaService } from '../nasa.service';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzCardModule],
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  apod: any;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getApod().subscribe(data => {
      this.apod = data;
    });
  }
}
