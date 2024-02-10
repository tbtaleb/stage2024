import { Component } from '@angular/core';
import { Devis } from '../../classes/devis';
import { DevisService } from '../../services/devis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-devis',
  templateUrl: './admin-list-devis.component.html',
  styleUrls: ['./admin-list-devis.component.css'],
})
export class AdminListDevisComponent {
  Devis: Devis[] = [];

  constructor(private devisService: DevisService, private router: Router) {}
  ngOnInit(): void {
    this.devisService.getDevices().subscribe((data) => {
      this.Devis = data;
    });
  }

  deleteDevis(devisId: number) {
    if (confirm('Are you sure you want to delete this user ?')) {
      this.devisService.deleteDevis(devisId).subscribe(() => {
        this.Devis = this.Devis.filter((devis) => devis.id !== devisId);
      });
    }
  }

  //----------------------------------------------------------------

  onClick(id: number) {
    this.router.navigate(['dashboard/listDevis/' + id]);
  }
}
