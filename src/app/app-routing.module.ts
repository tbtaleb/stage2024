import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MaisonDHauteComponent } from './maison-dhaute/maison-dhaute.component';
import { ProduitsComponent } from './produits/produits.component';
import { TeamBuildingComponent } from './team-building/team-building.component';
import { ReboiseComponent } from './reboise/reboise.component';

const routes: Routes = [
  {
    path: 'navbar', component: NavbarComponent,
    children: [
      { path: 'home', title: 'Acceuil', component: HomeComponent },
      { path: 'maisonDH', title: 'Acceuil', component: MaisonDHauteComponent },
      { path: 'produits', title: 'Acceuil', component: ProduitsComponent },
      { path: 'teamB', title: 'Acceuil', component: TeamBuildingComponent },
      { path: 'rebois', title: 'Acceuil', component: ReboiseComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
