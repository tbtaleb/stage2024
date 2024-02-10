import { Component, OnInit } from '@angular/core';
import { MaisonHaute } from '../AA_classes/maison-haute';
import { Produit } from '../AA_classes/produit';
import { TeamBuilding } from '../AA_classes/team-building';
import { MaisonHauteService } from '../AA_services/maison-haute.service';
import { ProduitService } from '../AA_services/produit.service';
import { TeamBuildingService } from '../AA_services/team-building.service';

@Component({
  selector: 'app-admin-offre-list',
  templateUrl: 'admin-offre-list.component.html',
  styleUrls: ['./admin-offre-list.component.css']
})
export class AdminOffreListComponent implements OnInit {
  selectedOption: string ='0';
  maisonHautes: MaisonHaute[] = [];
  produits: Produit[] = [];
  teamBuilding: TeamBuilding[] = [];

  constructor(
    private mhService: MaisonHauteService,
    private pService: ProduitService,
    private tbService: TeamBuildingService
  ) { }

  ngOnInit(): void {
    this.mhService.getAllMaisonHaute().subscribe((data) => { this.maisonHautes = data });
    this.pService.getAllProduit().subscribe((data) => { console.log(data);
     this.produits = data });
    this.tbService.getAllTeamBuilding().subscribe((data) => { this.teamBuilding = data });
  }

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }

  delete(idOf: number) {
    if (this.selectedOption == '0') {
      this.mhService.deleteMaisonHaute(idOf).subscribe(() =>
        this.maisonHautes = this.maisonHautes.filter((d) => d.id !== idOf)
      )
    }
    else if (this.selectedOption === '1') {
      this.pService.deleteProduit(idOf).subscribe(() =>
        this.produits = this.produits.filter((d) => d.id !== idOf)
      )
    }
    else if (this.selectedOption === '2') {
      this.tbService.deleteTeamBuilding(idOf).subscribe(() =>
        this.teamBuilding = this.teamBuilding.filter((d) => d.id !== idOf)
      )
    }
  }
}
