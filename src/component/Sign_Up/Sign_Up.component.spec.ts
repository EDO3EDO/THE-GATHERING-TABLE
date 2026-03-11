/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sign_UpComponent } from './Sign_Up.component';

describe('Sign_UpComponent', () => {
  let component: Sign_UpComponent;
  let fixture: ComponentFixture<Sign_UpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sign_UpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign_UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
