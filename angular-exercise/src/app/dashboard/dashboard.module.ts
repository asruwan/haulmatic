import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDirectiveComponent } from './dashboard-directive/dashboard-directive.component';


@NgModule({
  declarations: [DashboardComponent, DashboardDirectiveComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
