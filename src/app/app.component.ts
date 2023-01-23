import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserDataService } from './userinfo/userinfo.dataservice';
import { PlanDataService } from './selectplan/selectplan.dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  providers: [UserDataService, PlanDataService]
})
export class AppComponent {
  title = 'multi-step-form-main';

  constructor(
    public planData: PlanDataService,
    private router: Router
    ){}

  ngOnInit(){
    this.router.navigate([''])
  }
}