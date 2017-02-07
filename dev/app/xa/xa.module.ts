import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaRoutingModule } from './xa-routing.module';
import { XaComponent } from './xa.component';

@NgModule({
  imports: [
    CommonModule,
    XaRoutingModule
  ],
  declarations: [XaComponent]
})
export class XaModule { }
