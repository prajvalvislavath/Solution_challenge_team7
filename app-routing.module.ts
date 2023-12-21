import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyAddressComponent } from './verify-address/verify-address.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:'/signup',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'signin',component:LoginComponent},
  {path:'signup',component:RegistartionComponent},
  {path:'verifyemail',component:VerifyAddressComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
