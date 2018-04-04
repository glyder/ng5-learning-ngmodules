// The structure of an NgModule is the same whether it is a
// root module or a feature module.

// CommonModule only contains information for common directives such as
// ngIf and ngFor which are needed in most templates, whereas

// BrowserModule configures the Angular app for the browser which
// needs to be done only once.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomerDashboardComponent
  ],
  declarations: [CustomerDashboardComponent]
})
export class CustomerDashboardModule { }
