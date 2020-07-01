import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDirectiveComponent } from './dashboard-directive/dashboard-directive.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'directive', component: DashboardDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
