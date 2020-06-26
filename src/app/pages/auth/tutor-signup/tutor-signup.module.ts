import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorSignupPageRoutingModule } from './tutor-signup-routing.module';

import { TutorSignupPage } from './tutor-signup.page';
import {CommonsModule} from '../../../components/commons/commons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorSignupPageRoutingModule,
    CommonsModule,
  ],
  declarations: [TutorSignupPage]
})
export class TutorSignupPageModule {}
