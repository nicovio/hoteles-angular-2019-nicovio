/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisReservasComponent } from './mis-reservas.component';

describe('MisReservasComponent', () => {
  let component: MisReservasComponent;
  let fixture: ComponentFixture<MisReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
