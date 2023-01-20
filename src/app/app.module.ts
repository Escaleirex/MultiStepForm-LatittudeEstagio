import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SelectplanComponent } from './selectplan/selectplan.component';
import { AddonsComponent } from './addons/addons.component';
import { SummaryComponent } from './summary/summary.component';
import { Step1 } from './userinfo/userinfo.service';
import { UserDataService } from './userinfo/userinfo.dataservice';
import { Step2 } from './selectplan/selectplan.service';
import { PlanDataService } from './selectplan/selectplan.dataservice';
import { Step3 } from './addons/addons.service';
import { AddonsDataService } from './addons/addons.dataservice';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    SelectplanComponent,
    AddonsComponent,
    SummaryComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    Step1,
    UserDataService,
    Step2,
    PlanDataService,
    Step3,
    AddonsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
