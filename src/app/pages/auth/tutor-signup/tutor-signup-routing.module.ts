import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorSignupPage } from './tutor-signup.page';

const routes: Routes = [
  {
    path: '',
    component: TutorSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorSignupPageRoutingModule {}
