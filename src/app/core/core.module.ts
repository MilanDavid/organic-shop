import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
