import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-offre-list',
  templateUrl: './admin-offre-list.component.html',
  styleUrls: ['./admin-offre-list.component.css']
})
export class AdminOffreListComponent {
  selectedOption!: string;

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }
}
