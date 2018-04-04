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
  /* https://angular.io/guide/providers

     Example of LIMITING PROVIDER SCOPE with components. . .
     Generally, provide services the whole app needs in the root module and
     scope services by providing them in lazy loaded modules.

     providers: [UserService]
  */
  declarations: [CustomerDashboardComponent]
})
export class CustomerDashboardModule { }
