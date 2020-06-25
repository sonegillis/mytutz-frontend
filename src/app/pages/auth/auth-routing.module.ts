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
  },
  {
    path: 'tutor-signup',
    loadChildren: () => import('./tutor-signup/tutor-signup.module').then( m => m.TutorSignupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
