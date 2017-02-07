// vendor
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AsComponent } from './as.component';
import { As10100Component } from './as10100/as10100.component';
import { As10200Component } from './as10200/as10200.component';

// route definition
const asRoutes: Routes = [
  { path:'', component: AsComponent },
  { path:'as10100', component: As10100Component },
  { path:'as10200', component: As10200Component }
];
 
@NgModule({
  imports: [RouterModule.forChild(asRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AsRoutingModule { }
