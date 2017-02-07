// vendor
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import { AsComponent } from './as.component';
import { As10100Component } from './as10100/as10100.component';
import { As10200Component } from './as10200/as10200.component';

// routing
import { AsRoutingModule } from './as-routing.module'; 

// services

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AsRoutingModule
  ],
  declarations: [
    AsComponent, 
    As10100Component, 
    As10200Component
  ]
})
export class AsModule { }
