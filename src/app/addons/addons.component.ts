import { Component, OnInit, OnDestroy } from '@angular/core';
import { Step2 } from '../selectplan/selectplan.service';
import { PlanDataService } from '../selectplan/selectplan.dataservice';
import { Step3 } from '../addons/addons.service';
import { AddonsDataService } from '../addons/addons.dataservice';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['../app.component.css']
})
export class AddonsComponent implements OnInit, OnDestroy {
  step2: Step2;
  Step3: Step3;
  step3: FormGroup;

  onlinechecked: boolean;
  storagechecked: boolean;
  customizablechecked: boolean


  form: FormGroup;
  addons: Array<any> = [
    { name: 'Online', value: 'online', checked: false},
    { name: 'Storage', value: 'storage', checked: false},
    { name: 'Customizable', value: 'customizable', checked: false},
  ];



  constructor(
    public planData: PlanDataService,
    public addonsData: AddonsDataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.step3 = this.fb.group({
      addons:  new FormArray([])
     }); 
  }

  onSubmit(){
    this.addonsData.step3 = this.Step3;

    this.router.navigate(['/summary']);
  }

  onCheckboxChange(event: any) {
    
    const addons = (this.step3.controls['addons'] as FormArray);
    if (event.target.checked) {
      addons.push(new FormControl(event.target.value));
      console.log(event.target.value);
    } else {
      const index = addons.controls
      .findIndex(x => x.value === event.target.value);
      addons.removeAt(index);
    }
    this.Step3 = this.step3.value;
    console.log(addons);
  }

  
  
  ngOnInit() {
    this.step2 = this.planData.step2;

    const addons = (this.step3.controls['addons'] as FormArray);

    if(this.addonsData.step3?.addons.includes('online')){
      this.onlinechecked = true;
      addons.push(new FormControl('online'));
    }
    if(this.addonsData.step3?.addons.includes('storage')){
      this.storagechecked = true;
      addons.push(new FormControl('storage'));
    }
    if(this.addonsData.step3?.addons.includes('customizable')){
      this.customizablechecked = true;
      addons.push(new FormControl('customizable'));
    }

    console.log(addons);

    

  }
  
  ngOnDestroy(){
    

    this.Step3 = this.step3.value;
    this.addonsData.step3 = this.Step3;

    console.log(this.step3.value);
    console.log(this.Step3);
    console.log(this.addonsData.step3);
  }

}
