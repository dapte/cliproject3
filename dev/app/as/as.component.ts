import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bsi-as',
  template:  `
    <h2>AS Works</h2>
    <nav>
      <a routerLink="as10100" routerLinkActive="active">AS10100</a>
      <a routerLink="as10200" routerLinkActive="active">AS10200</a>
    </nav>
  `
})
export class AsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
}
