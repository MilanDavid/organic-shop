import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(
    private authService: AuthService,
    private cartService: ShoppingCartService
  ) {
  }
  
  async ngOnInit(){
    this.authService.appUser$.subscribe(user => this.appUser = user);

    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.authService.logout();
  }
}
