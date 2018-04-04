// Generate this file with:
//    ng generate module customers --routing

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';

// Component created with:
//    ng generate component customers/customer-list
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,

    // CustomersRoutingModule is then listed in the @NgModule imports array giving
    // CustomersModule access to its own routing module
    CustomersRoutingModule
  ],

  // CustomerListComponent is in the declarations array,
  // which means CustomerListComponent belongs to the CustomersModule.
  declarations: [
    // Component here
    CustomerListComponent
  ]
})
export class CustomersModule { }
