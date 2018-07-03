import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
