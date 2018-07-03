import { Component, Input, OnChanges } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges{
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(
    private cartService: ShoppingCartService
  ) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  ngOnChanges(){
    if(this.shoppingCart) {
      if(this.shoppingCart.getQuantity(this.product) === 0){
        this.cartService.removeItem(this.product);
      }
    }
  }

}
