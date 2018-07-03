import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersDetailComponent } from './components/my-orders/my-orders-detail/my-orders-detail.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      {path: 'my/orders/:id', component: MyOrdersDetailComponent, canActivate: [AuthGuard]},
    ])
  ],
  declarations: [
    CheckOutComponent,
    ProductsComponent,
    ProductFilterComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrdersComponent,
    MyOrdersDetailComponent,
    OrderSuccessComponent
  ]
})
export class ShoppingModule { }
