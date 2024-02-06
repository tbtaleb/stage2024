import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../AA_classes/client';

const URL = 'http://localhost:8088/api/v1/client'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  addClient(client:Client):Observable<Client>{
    return this.http.post<Client>(URL,client);
  }

  getClient():Observable<Client[]>{
    return this.http.get<Client[]>(URL)
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(URL + '/' + id);
  }

  getClientrByUsername(username: string): Observable<Client | undefined> {
    return this.http
      .get<Client[]>(URL)
      .pipe(map((clients) => clients.find((client) => client.username === username)));
  }
}
