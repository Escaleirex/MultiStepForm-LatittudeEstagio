import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SelectplanComponent } from './selectplan/selectplan.component';
import { AddonsComponent } from './addons/addons.component';
import { SummaryComponent } from './summary/summary.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  { path: '', redirectTo: 'userinfo', pathMatch: 'full' },
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'selectplan', component: SelectplanComponent },
  { path: 'addons', component: AddonsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'thankyou', component: ThankyouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
