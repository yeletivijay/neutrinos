import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot([
      {path:'Login',component:LoginComponent},
     {path:'SignUp',component:SignupComponent},
     {path:'home',component:HomeComponent}
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
