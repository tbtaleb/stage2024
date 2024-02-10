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
import { AdminOffreListComponent } from './admin-offre-list/admin-offre-list.component';
import { LoginComponent } from './login/login.component';
import { LoginfComponent } from './loginf/loginf.component';
import { SignupfComponent } from './signupf/signupf.component';
import { FormComponent } from './devis/componants/form/form.component';
import { AdminMaisonHauteFormsComponent } from './admin-maison-haute-forms/admin-maison-haute-forms.component';
import { AdminProduitFormsComponent } from './admin-produit-forms/admin-produit-forms.component';
import { AdminTeamBuildingFormsComponent } from './admin-team-building-forms/admin-team-building-forms.component';

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
    path: 'loginpage',
    title: 'LoginPage',
    component: LoginComponent,
    children: [
      { path: 'login', title: 'Login', component: LoginfComponent },
      { path: 'signup', title: 'Sign Up', component: SignupfComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'dashboard', title: 'Dashboard', component: DashboardComponent,
    children: [
      { path: 'OfferList', component: AdminOffreListComponent },
      { path: 'OffreForms', component: AdminOffreFormsComponent },
      { path: 'mhForms/:id', component: AdminMaisonHauteFormsComponent },
      { path: 'pForms/:id', component: AdminProduitFormsComponent },
      { path: 'tbForms/:id', component: AdminTeamBuildingFormsComponent },
      { path: '', redirectTo: 'OfferList', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
