import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private apiUrl = 'http://34.227.164.19/api/requests';

  private token = localStorage.getItem('tokenUser');

  constructor(private http: HttpClient, private router: Router) {
    if (!this.token) {
      // Redirige al usuario al componente homepage si el token está vacío
      this.router.navigate(['/']);
    }
  }

  /**
   * Author: Luis Tang
   * 
   */
  getData(): Observable<any> {
    // Configura los encabezados con el token Bearer
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  /**
     * 
     * Author: Héctor Domínguez
     * @param id id de la solicitud que se esta editando
     * 
     */
  getDataById(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(`${this.apiUrl}/edit/${id}`, { headers });
  }

  /**
   * 
   * Author: Héctor Domínguez
   * @param id id de la solicitud que se esta editando
   * 
   * @param newData nuevos valores de la solicitud a editar
   */
  updateData(id: string, newData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.patch<any>(`${this.apiUrl}/edit/${id}`, newData, { headers });
  }

  /**
 * 
 * Author: Lucía Pereyra
 * @param request objeto que se envía al servidor
 * 
 */
  createRequest(request: Object): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(`${this.apiUrl}`, request, { headers });
  }
}
