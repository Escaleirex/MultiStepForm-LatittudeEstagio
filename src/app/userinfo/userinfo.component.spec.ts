import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoComponent } from './userinfo.component';

import {NgForm} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NgModel } from '@angular/forms';


describe('UserinfoComponent', () => {
  let component: UserinfoComponent;
  let fixture: ComponentFixture<UserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
