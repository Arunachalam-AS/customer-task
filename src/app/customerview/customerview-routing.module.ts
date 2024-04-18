import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewComponent } from '../customerlist/customer-view/customer-view.component';
const routes: Routes = [
  { path: 'customers/customerview/:id', component:CustomerViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerviewRoutingModule { }
