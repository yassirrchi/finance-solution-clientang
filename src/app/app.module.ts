import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { UserAuthComponent } from './sections/user-auth/user-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OperationComponent } from './sections/operation/operation.component';
import { TiersComponent } from './sections/tiers/tiers.component';
import { PortefeuilleComponent } from './sections/portefeuille/portefeuille.component';
import {  HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { PortefeuillesComponent } from './sections/portefeuilles/portefeuilles.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { FondComponent } from './sections/fond/fond.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { UsersettingsComponent } from './sections/usersettings/usersettings.component';
import { OperationsTableComponent } from './components/operations-table/operations-table.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserAuthComponent,
    OperationComponent,
    TiersComponent,
    PortefeuilleComponent,
    TableComponent,
    PortefeuillesComponent,
    ControlBarComponent,
    FondComponent,
    DetailsComponent,
    SearchBarComponent,
    DashboardComponent,
    UsersettingsComponent,
    OperationsTableComponent,
    
     
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
