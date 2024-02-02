import { Component } from '@angular/core';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css'],
})
export class MaisonComponent {
  isAdditionalContentVisible: boolean = false;

  toggleAdditionalContent(): void {
    this.isAdditionalContentVisible = !this.isAdditionalContentVisible;
  }
}
