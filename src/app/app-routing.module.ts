import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MaisonDHauteComponent } from './maison-dhaute/maison-dhaute.component';
import { ProduitsComponent } from './produits/produits.component';
import { TeamBuildingComponent } from './team-building/team-building.component';
import { ReboiseComponent } from './reboise/reboise.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminOffreFormsComponent } from './admin-offre-forms/admin-offre-forms.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormComponent } from './devis/componants/form/form.component';

const routes: Routes = [
  {
    path: 'acceuil',
    component: AcceuilComponent,
    children: [
      { path: 'home', title: 'Acceuil', component: HomeComponent },
      { path: 'maisonDH', title: 'Acceuil', component: MaisonDHauteComponent },
      { path: 'produits', title: 'Acceuil', component: ProduitsComponent },
      { path: 'teamB', title: 'Acceuil', component: TeamBuildingComponent },
      { path: 'rebois', title: 'Acceuil', component: ReboiseComponent },
      { path: 'devis', title: 'Acceuil', component: FormComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    children: [{ path: 'OffreForms', component: AdminOffreFormsComponent }],
  },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
