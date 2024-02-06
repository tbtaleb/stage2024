import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from '../AA_classes/produit';

const url='http://localhost:8088/api/v1/produits'
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  getAllProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(url);
  }

  getProduitById(id: number): Observable<Produit | undefined> {
    return this.http.get<Produit>(url + '/' + id);
  }

  addProduit(Produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(url, Produit);
  }
  updateProduit(Produit: Produit): Observable<Produit> {
    const updateUrl = `${url}/${Produit.id}`;
    return this.http.put<Produit>(updateUrl, Produit);
  }
  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(url + '/' + id);
  }
}
