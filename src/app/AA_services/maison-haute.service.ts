import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaisonHaute } from '../AA_classes/maison-haute';
import { Observable } from 'rxjs';

const url = 'http://localhost:8088/api/v1/maisonHaute'
@Injectable({
  providedIn: 'root'
})
export class MaisonHauteService {

  constructor(private http: HttpClient) { }

  getAllMaisonHaute(): Observable<MaisonHaute[]> {
    return this.http.get<MaisonHaute[]>(url);
  }

  getMaisonHauteById(id: number): Observable<MaisonHaute | undefined> {
    return this.http.get<MaisonHaute>(url + '/' + id);
  }

  addMaisonHaute(MaisonHaute: MaisonHaute): Observable<MaisonHaute> {
    return this.http.post<MaisonHaute>(url, MaisonHaute);
  }
  updateMaisonHaute(MaisonHaute: MaisonHaute): Observable<MaisonHaute> {
    const updateUrl = `${url}/${MaisonHaute.id}`;
    return this.http.put<MaisonHaute>(updateUrl, MaisonHaute);
  }
  deleteMaisonHaute(id: number): Observable<void> {
    return this.http.delete<void>(url + '/' + id);
  }
}
