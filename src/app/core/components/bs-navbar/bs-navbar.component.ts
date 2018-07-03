import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

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
