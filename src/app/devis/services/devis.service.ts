import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from '../classes/devis';


const url = 'http://localhost:8088/api/v1/Devis';
@Injectable({
  providedIn: 'root'
})

export class DevisService {

  constructor(private http:HttpClient) { }

  getDevices(): Observable<Devis[]> {
    return this.http.get<Devis[]>(url);
  }

  getDevisById(id: number): Observable<Devis | undefined> {
    return this.http.get<Devis>(url + '/' + id);
  }

  addDevis(devis: Devis): Observable<Devis> {
    return this.http.post<Devis>(url, devis);
  }

  updateDevis(devis: Devis): Observable<Devis> {
    const updateUrl = `${url}/${devis.id}`;
    return this.http.put<Devis>(updateUrl, devis);
  }

  deleteDevis(id: number): Observable<void> {
    return this.http.delete<void>(url + '/' + id);
  }


}
