import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Orders Components
import { OrderListComponent } from './order-list/order-list.component';


// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: OrderListComponent   // imported above to get the classname here
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
