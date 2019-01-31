import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AcceptedComponent } from './accepted/accepted.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'checkout', component: PaymentComponent },
  { path: 'accepted', component: AcceptedComponent }  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
