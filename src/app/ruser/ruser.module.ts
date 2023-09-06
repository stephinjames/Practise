import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuserRoutingModule } from './ruser-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RuserRoutingModule
  ]
})
export class RuserModule { }
