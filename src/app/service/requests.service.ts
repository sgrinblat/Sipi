import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private apiUrl = 'http://34.227.164.19/api/requests';
  
  // Token Bearer, reemplaza 'YOUR_TOKEN_HERE' por el token real
  private token = localStorage.getItem('tokenUser');

  constructor(private http: HttpClient, private router: Router) {
    if (!this.token) {
      // Redirige al usuario al componente de login si el token está vacío
      this.router.navigate(['/login']);
    }
  }

  getData(): Observable<any> {
    // Configura los encabezados con el token Bearer
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
