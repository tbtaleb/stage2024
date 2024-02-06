import { Injectable } from '@angular/core';

import { Observable, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Favs } from '../AA_classes/favs';
const url = 'http://localhost:8088/api/v1/Favs';
@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor(private http:HttpClient) { }

  addFav(favs: Favs): Observable<Favs> {
    return this.http.post<Favs>( url, favs);
  }

  getFav(): Observable<Favs[]> {
    return this.http.get<Favs[]>(url);
  }

  getFavById(id: number): Observable<Favs> {
    return this.http.get<Favs>(url + '/' + id);
  }

  updateFavs(Fav: Favs): Observable<Favs> {
    return this.http.put<Favs>(url + '/' + Fav.id, Fav);
  }
}
