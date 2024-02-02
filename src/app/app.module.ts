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
import { FormComponent } from './devis/componants/form/form.component';
import { MaisonComponent } from './devis/componants/maison/maison.component';
import { ProduitDivComponent } from './devis/componants/produit-div/produit-div.component';
import { TeamBuildingDivComponent } from './devis/componants/team-building-div/team-building-div.component';
import { ActiviteDivComponent } from './devis/componants/activite-div/activite-div.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MaisonDHauteComponent,
    ProduitsComponent,
    TeamBuildingComponent,
    ReboiseComponent,
    FormComponent,
    MaisonComponent,
    ProduitDivComponent,
    TeamBuildingDivComponent,
    ActiviteDivComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
