import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerdetailsRoutingModule } from './customerdetails-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerdetailsRoutingModule
  ]
})
export class CustomerdetailsModule { }
