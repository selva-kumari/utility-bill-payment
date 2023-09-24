import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [{
  path:"",redirectTo:"/customer-login",pathMatch:"full"
},
{
  path:"customer-login",component:CustomerLoginComponent
},
{
  path:"home",component:HomeComponent
},
{
  path:"payment",component:PaymentComponent
},
{
  path:"transaction-history",component:TransactionHistoryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

  
export class AppRoutingModule { }
