import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupPage} from './signup/signup.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-account'
  },
  {
    path: 'create-account',
    component: SignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
