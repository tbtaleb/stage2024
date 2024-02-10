import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevisService } from '../../services/devis.service';
import { Devis } from '../../classes/devis';

@Component({
  selector: 'app-admin-selected-devis',
  templateUrl: './admin-selected-devis.component.html',
  styleUrls: ['./admin-selected-devis.component.css']
})
export class AdminSelectedDevisComponent {

  id:number;
  devis : Devis;

  constructor(private route:ActivatedRoute,private devisService:DevisService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.devisService.getDevisById(this.id).subscribe(data=>{
      this.devis = data;
      console.log(this.devis)
      console.log(this.devis.chosenActivityRebois,this.devis.chosenHouses,this.devis.chosenProducts,this.devis.chosenTeamB,this.devis.societe);
      
    });
  }
}
