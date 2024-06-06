import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private baseUrl = 'https://admin.repuestoscelu.com.ar/api'; // URL base del API
  private token = 'OTBmNGMxZjQtZjFmNS0xMWVlLWE4MzMtNjNlZjBlOGM3YjI1OmM4M2ExNDYxLWM5NDQtNDc4NS1iMzc2LWI0Njc0YzI2YmQ2Zg=='; // Token fijo
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private tokenUsuario = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("tokenUser")}`
  });

  constructor(private http: HttpClient) { }

}
