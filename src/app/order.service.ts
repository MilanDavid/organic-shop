import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) { }

  getOrders() {
    return this.db.list('/orders').snapshotChanges().map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() }));
    });
  }

  getSingleOrder(id) {
    return this.db.object('/orders/' + id).valueChanges();
  }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrdersByUser(userId: string) {
    // return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges().map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() }));
    });
  }

}
