import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerlistRoutingModule } from './customerlist-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from '../addcustomer/add-customer/add-customer.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerViewComponent
  ],
  imports: [
    CommonModule,
    CustomerlistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerlistModule { }
