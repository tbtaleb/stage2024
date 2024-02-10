import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaisonDHauteComponent } from './maison-dhaute/maison-dhaute.component';
import { ProduitsComponent } from './produits/produits.component';
import { TeamBuildingComponent } from './team-building/team-building.component';
import { ReboiseComponent } from './reboise/reboise.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminOffreFormsComponent } from './admin-offre-forms/admin-offre-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FormComponent } from './devis/componants/form/form.component';
import { AdminOffreListComponent } from './admin-offre-list/admin-offre-list.component';
import { LoginComponent } from './login/login.component';
import { LoginfComponent } from './loginf/loginf.component';
import { SignupfComponent } from './signupf/signupf.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminMaisonHauteFormsComponent } from './admin-maison-haute-forms/admin-maison-haute-forms.component';
import { AdminProduitFormsComponent } from './admin-produit-forms/admin-produit-forms.component';
import { AdminTeamBuildingFormsComponent } from './admin-team-building-forms/admin-team-building-forms.component';
import { AdminListDevisComponent } from './devis/componants/admin-list-devis/admin-list-devis.component';
import { AdminSelectedDevisComponent } from './devis/componants/admin-selected-devis/admin-selected-devis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MaisonDHauteComponent,
    ProduitsComponent,
    TeamBuildingComponent,
    ReboiseComponent,
    DashboardComponent,
    AdminSideBarComponent,
    AdminOffreFormsComponent,
    AcceuilComponent,
    AdminNavbarComponent,
    ReboiseComponent,
    FormComponent,
    AdminNavbarComponent,
    AdminOffreListComponent,
    LoginComponent,
    LoginfComponent,
    SignupfComponent,
    AdminMaisonHauteFormsComponent,
    AdminProduitFormsComponent,
    AdminTeamBuildingFormsComponent,
    AdminListDevisComponent,
    AdminSelectedDevisComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
