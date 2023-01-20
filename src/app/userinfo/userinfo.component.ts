import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NgModule} from "@angular/core";
import { Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Step1 } from '../userinfo/userinfo.service';
import { UserDataService } from '../userinfo/userinfo.dataservice';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['../app.component.css']
})


export class UserinfoComponent implements OnInit, OnDestroy{

  NameRequired: boolean = false;
  NameMinLength: boolean = false;

  EmailRequired: boolean = false;
  EmailCorrect: boolean = false;

  PhoneRequired: boolean = false;
  PhoneCorrect: boolean = false;

  step1: FormGroup;

  constructor(
    public userservice: UserDataService,
    public Step1: Step1,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.step1 = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern("[\+](([0-9]{1})|([0-9]{2})|([0-9]{3})) [0-9]{3} [0-9]{3} [0-9]{3}")]]
    });
  }
    

  

  



  onSubmit(): void {
    if(this.step1.valid){
    
      this.Step1.name = this.step1.controls['name'].value!;
      this.Step1.email = this.step1.controls['email'].value!;
      this.Step1.telephone = this.step1.controls['telephone'].value!;
  
      this.router.navigate(['/selectplan']);
    }

  }

  ngOnInit(){

    
    this.step1.controls['name'].setValue(this.userservice.step1?.name);
    this.step1.controls['email'].setValue(this.userservice.step1?.email);
    this.step1.controls['telephone'].setValue(this.userservice.step1?.telephone);
  }

  ngOnDestroy() {
    this.Step1.name = this.step1.controls['name'].value!;
    this.Step1.email = this.step1.controls['email'].value!;
    this.Step1.telephone = this.step1.controls['telephone'].value!;
    //alert(this.Step1.name + this.Step1.email + this.Step1.telephone);
    this.userservice.step1 = this.Step1;
    //alert(this.userservice.step1.name + this.userservice.step1.email + this.userservice.step1.telephone);

  }



}

