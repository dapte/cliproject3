import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  //{ path: 'tx/tx10100', component:   }
  { path: 'as', loadChildren: 'app/as/as.module#AsModule'},
  { path: 'tx', loadChildren: 'app/tx/tx.module#TxModule'},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
