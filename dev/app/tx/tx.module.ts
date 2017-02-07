// vendor
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import { TxComponent } from './tx.component';
import { Tx10100Component } from './tx10100/tx10100.component';

// routing
import { TxRoutingModule } from './tx-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TxRoutingModule
  ],
  declarations: [
    TxComponent,
    Tx10100Component,
    Tx10100Component,
    Tx10100Component
  ]
})
export class TxModule { }
