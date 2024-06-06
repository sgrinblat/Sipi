import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private apiUrl = 'http://34.227.164.19/api/login';

  constructor(private http: HttpClient) {}

  iniciarSesionApi(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

  sesionIniciada(): boolean {
    const token = localStorage.getItem('tokenUser');
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      this.cerrarSesion();
      return false;
    }
    return true;
  }

  cerrarSesion() {
    localStorage.removeItem("tokenUser");
  }

}
