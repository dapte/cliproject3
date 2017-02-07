// vendor
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { TxComponent } from './tx.component';
import { Tx10100Component } from './tx10100/tx10100.component';

// route definition
const txRoutes: Routes = [
  { path:'', component: TxComponent },
  { path:'tx10100', component: Tx10100Component }
];

@NgModule({
  imports: [RouterModule.forChild(txRoutes)],
  exports: [RouterModule],
  providers: []
})
export class TxRoutingModule { }
