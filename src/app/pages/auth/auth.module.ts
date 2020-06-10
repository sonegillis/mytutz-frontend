import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import {CommonsModule} from '../../components/commons/commons.module';
import {SignupPage} from './signup/signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonsModule,
    AuthPageRoutingModule,
  ],
  declarations: [SignupPage]
})
export class AuthPageModule {}
