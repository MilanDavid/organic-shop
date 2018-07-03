import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'shared/models/order';
import { Subscription } from 'rxjs';
import { OrderService } from 'shared/services/order.service';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  userSub: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ){}

  async ngOnInit(){
    this.userSub = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart, this.cart.totalPrice);
    let result = await this.orderService.placeOrder(order);

    this.router.navigate(['/order-success', result.key]);
  }

}
