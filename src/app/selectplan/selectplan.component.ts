import { Component } from '@angular/core';
import { Step2 } from '../selectplan/selectplan.service';
import { PlanDataService } from '../selectplan/selectplan.dataservice';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selectplan',
  templateUrl: './selectplan.component.html',
  styleUrls: ['../app.component.css']
})
export class SelectplanComponent {
  MonthlyV: boolean;
  flag: any = 0;

  oldPlan:string;
  oldMonthly: number;
  checked: boolean;

  constructor(
    public planservice: PlanDataService,
    public Step2: Step2,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  step2 = this.fb.group({
    plan: [''],
    monthly: [false]
  });

  onSubmit(): void {

    this.Step2.plan = this.step2.controls['plan'].value!;

    this.MonthlyV = !this.step2.controls['monthly'].value!;

    if(this.MonthlyV == false){
      this.Step2.monthly = 0;
    }
    else if (this.MonthlyV == true){
      this.Step2.monthly = 1;
    }
    
    this.router.navigate(['/addons']);
  }

  onClick(){
    

    this.Step2.plan = this.step2.controls['plan'].value!;
    this.MonthlyV = !this.step2.controls['monthly'].value!;

    console.log(this.step2.controls['monthly'].value!);

    if(this.MonthlyV == false){
      this.Step2.monthly = 0;
    }
    else if (this.MonthlyV == true){
      this.Step2.monthly = 1;
    }
  }

  ngOnInit(){

    this.oldPlan = this.planservice.step2?.plan;
    this.oldMonthly = this.planservice.step2?.monthly;

    if(this.oldMonthly == undefined){
      this.oldMonthly = 1;
    }
    if(this.oldPlan == undefined){
      this.oldPlan = 'Arcade';
    }

    this.MonthlyV = !!this.oldMonthly;

    this.step2.controls["plan"].setValue(this.oldPlan);
    this.step2.controls['monthly'].setValue(!!!this.oldMonthly);
    

    
  }

  ngOnDestroy() {
    this.Step2.plan = this.step2.controls["plan"].value!;
    this.planservice.step2 = this.Step2;
  }

}
