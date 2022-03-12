import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LandingComponent } from '../_shared/landing/landing.component';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  AuthComponent  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
