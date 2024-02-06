import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../AA_classes/admin';

const url='http://localhost:8088/api/v1/Admin'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http :HttpClient) { }

  getAdminById(id:number):Observable<Admin>{
    return this.http.get<Admin>(url + '/' + id);
  }
}
