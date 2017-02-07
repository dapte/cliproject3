// vendor
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
// import { PageNotFoundComponent }   from './not-found.component';
// other comonents,...

import { AppRoutingModule } from './app-routing.module';
import { AsModule } from './as/as.module';
import { TxModule } from './tx/tx.module';
import {  
      ToolbarModule,
      ButtonModule
      } from 'primeng/primeng';
import { AppHeaderComponent } from './app-header/app-header.component';
// other modules.  e.g. sp, xa, ..

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
    // , other components..
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
