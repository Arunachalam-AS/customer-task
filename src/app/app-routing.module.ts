
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'customerlist', loadChildren: () => import('./customerlist/customerlist.module').then(m => m.CustomerlistModule) },
  { path: 'customerdetails/:id', loadChildren: () => import('./customerdetails/customerdetails.module').then(m => m.CustomerdetailsModule) },
  { path: 'addcustomer', loadChildren: () => import('./addcustomer/addcustomer.module').then(m => m.AddcustomerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
