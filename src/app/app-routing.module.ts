import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './sections/user-auth/user-auth.component';
import { OperationComponent } from './sections/operation/operation.component';
import { TiersComponent } from './sections/tiers/tiers.component';
import { PortefeuilleComponent } from './sections/portefeuille/portefeuille.component';
import { PortefeuillesComponent } from './sections/portefeuilles/portefeuilles.component';

const routes: Routes = [
  {path:"login",component:UserAuthComponent},
  {path:"operation",component:OperationComponent},
  {path:"tiers",component:TiersComponent},
  {path:"portefeuille",component:PortefeuilleComponent},
  {path:"portefeuille/portefeuilles",component:PortefeuillesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
