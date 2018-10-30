import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGuard } from './admin.guard';

import { AdminRoutingModule } from './admin-routing.module';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    AdminGuard
  ],
  declarations: [DashboardComponent, TemplateComponent]
})
export class AdminModule { }
