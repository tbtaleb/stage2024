import { Component, OnInit } from '@angular/core';
import { MaisonHaute } from '../AA_classes/maison-haute';
import { MaisonHauteService } from '../AA_services/maison-haute.service';
import { Favs } from '../AA_classes/favs';
import { FavsService } from '../AA_services/favs.service';
import { AuthService } from '../AA_services/auth.service';
import { ClientService } from '../AA_services/client.service';
import { Client } from '../AA_classes/client';

@Component({
  selector: 'app-maison-dhaute',
  templateUrl: './maison-dhaute.component.html',
  styleUrls: ['./maison-dhaute.component.css']
})
export class MaisonDHauteComponent implements OnInit {
  lesMaisonHaute: MaisonHaute[] = [];
  fav: Favs;
  loggedinClient !: Client

  constructor(
    private mhService: MaisonHauteService,
    private favService: FavsService,
    private authService: AuthService,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.fetchData();

    const loggedInClientId = this.authService.getCurrentUserId();
    this.clientService.getClientById(Number(loggedInClientId)).subscribe({
      next: (u) => {
        this.loggedinClient = u;
      },
      error: (error) => {
        console.error(error);
      },
    });

  }

  fetchData(): void {
    this.mhService.getAllMaisonHaute().subscribe((data) => { this.lesMaisonHaute = data; });
  }

  save(idOf: number): void {
    const fav: Favs = {
      id:0,
      id_client: this.loggedinClient.id,
      id_offre: idOf,
      type: "MaisondHaute"
    }
    this.favService.addFav(fav).subscribe((data) => {
      console.log(fav);
    })
  }

}
