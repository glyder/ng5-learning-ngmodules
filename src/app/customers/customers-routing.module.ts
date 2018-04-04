import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Damn still need to import all the components!!!
import { CustomerListComponent } from './customer-list/customer-list.component';

// const routes: Routes = [];

const routes: Routes = [
  {
    // Set to '' because the path in AppRoutingModule is already set to customers
    path: '',
    component: CustomerListComponent  // imported above to get the classname here
  }
];


@NgModule({
  // https://angular.io/guide/lazy-loading-ngmodules
  // RouterModule.forChild(routes) to feature routing modules.
  // This way, Angular knows that the route list is only responsible for providing additional routes and
  // is intended for feature modules. You can use forChild() in multiple modules.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {



}
