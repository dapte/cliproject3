/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XaComponent } from './xa.component';

describe('XaComponent', () => {
  let component: XaComponent;
  let fixture: ComponentFixture<XaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
