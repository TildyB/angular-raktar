import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './guard.service';
import { LoginComponent } from './login/login.component';
import { RaktarakComponent } from './raktarak/raktarak.component';
import { TargyakComponent } from './targyak/targyak.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'targyak',component: TargyakComponent},
  {path:'raktarak',component:RaktarakComponent},
  {path: 'login',component:LoginComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
