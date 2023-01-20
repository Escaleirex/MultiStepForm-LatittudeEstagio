import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDataService } from '../userinfo/userinfo.dataservice';
import { Routes, RouterModule, Router } from '@angular/router';
import { Step1 } from '../userinfo/userinfo.service';
import { PlanDataService } from '../selectplan/selectplan.dataservice';
import { Step2 } from '../selectplan/selectplan.service';
import { AddonsDataService } from '../addons/addons.dataservice';
import { Step3 } from '../addons/addons.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['../app.component.css']
})

export class SummaryComponent implements OnInit, OnDestroy{

  step1: Step1;
  step2: Step2;
  step3: Step3;

  button: boolean = true;
  cost: number;
  costS: string;

  constructor(
    public userData: UserDataService,
    public planData: PlanDataService,
    public addonsData: AddonsDataService,
    private router: Router
  ) { }

  checkValidation(): boolean{

    if(this.userData?.step1.name == undefined || this.userData?.step1.email == undefined || this.userData?.step1.telephone == undefined ||
      this.planData?.step2.plan == undefined || this.planData?.step2.monthly == undefined){

      this.button = true;
    }
    else{
      this.button = false;
      
    }

    return this.button;
  }
  checkNext(): void{

    if(!this.checkValidation()){
      this.router.navigate(['/thankyou']);
    }

  }

  calculateValue(): string{
    
    if(!this.checkValidation()){
      this.cost = 0;
      this.costS = '';
      
      switch(this.step2.monthly){
        case 0: {

          switch(this.step2.plan){

            case 'Arcade':{
              this.cost = this.cost + 90;
              break;
            }
            case 'Advanced':{
              this.cost = this.cost + 120;
              break;
            }
            case 'Pro':{
              this.cost = this.cost + 150;
              break;
            }

          }

          this.step3.addons.forEach( (addon: string) => {
            switch(addon){

              case 'online':{
                this.cost = this.cost + 10;
                break;
              }
              case 'storage':{
                this.cost = this.cost + 20;
                break;
              }
              case 'customizable':{
                this.cost = this.cost + 20;
                break;
              }
  
            }
          });

          this.costS = '$' + this.cost + '/yr';

          break;
        }
        case 1: {

          switch(this.step2.plan){

            case 'Arcade':{
              this.cost = this.cost + 9;
              break;
            }
            case 'Advanced':{
              this.cost = this.cost + 12;
              break;
            }
            case 'Pro':{
              this.cost = this.cost + 15;
              break;
            }

          }

          this.step3.addons.forEach( (addon: string) => {
            switch(addon){

              case 'online':{
                this.cost = this.cost + 1;
                break;
              }
              case 'storage':{
                this.cost = this.cost + 2;
                break;
              }
              case 'customizable':{
                this.cost = this.cost + 2;
                break;
              }
  
            }
          });

          this.costS = '$' + this.cost + '/mo';

          break;
        }
      }

    }
    
    console.log(this.cost);
    
    return this.costS;
  }
  
  ngOnInit() {
    this.step1 = this.userData?.step1; 
    this.step2 = this.planData?.step2;
    this.step3 = this.addonsData?.step3;
  }
  
  ngOnDestroy(){

  }
  
}
