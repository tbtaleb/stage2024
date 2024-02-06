import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TeamBuilding } from '../AA_classes/team-building';

const url='http://localhost:8088/api/v1/TeamBuildings'
@Injectable({
  providedIn: 'root'
})
export class TeamBuildingService {

  constructor(private http:HttpClient) { }

  getAllTeamBuilding(): Observable<TeamBuilding[]> {
    return this.http.get<TeamBuilding[]>(url);
  }

  getTeamBuildingById(id: number): Observable<TeamBuilding | undefined> {
    return this.http.get<TeamBuilding>(url + '/' + id);
  }

  addTeamBuilding(TeamBuilding: TeamBuilding): Observable<TeamBuilding> {
    return this.http.post<TeamBuilding>(url, TeamBuilding);
  }
  updateTeamBuilding(TeamBuilding: TeamBuilding): Observable<TeamBuilding> {
    const updateUrl = `${url}/${TeamBuilding.id}`;
    return this.http.put<TeamBuilding>(updateUrl, TeamBuilding);
  }
  deleteTeamBuilding(id: number): Observable<void> {
    return this.http.delete<void>(url + '/' + id);
  }
}
