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
    AdminNavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
