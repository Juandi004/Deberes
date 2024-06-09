import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey: string = 'jJY42s1M6CKxu6oEpoMWkhYjg81KhxiC68LubVRj'; // Reemplaza con tu clave de la NASA
  private apiUrl: string = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getApod(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
}
