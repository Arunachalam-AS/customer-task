import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './error.interceptor';
import { AddcustomerRoutingModule } from './addcustomer/addcustomer-routing.module';
import { CustomerlistRoutingModule } from './customerlist/customerlist-routing.module';
import { CustomerdetailsRoutingModule } from './customerdetails/customerdetails-routing.module';
import { CustomerviewModule } from './customerview/customerview.module';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AddcustomerRoutingModule,
    CustomerlistRoutingModule,
    CustomerdetailsRoutingModule,
    CustomerviewModule


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
