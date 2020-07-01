import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDirectiveComponent } from './dashboard-directive/dashboard-directive.component';
import { MaterialModule } from "../core/material.module";
import { DashboardDirectiveChildComponent } from './dashboard-directive/dashboard-directive-child/dashboard-directive-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, DashboardDirectiveComponent, DashboardDirectiveChildComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class DashboardModule { }
