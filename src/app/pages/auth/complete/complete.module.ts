import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletePageRoutingModule } from './complete-routing.module';

import { CompletePage } from './complete.page';
import {CommonsModule} from '../../../components/commons/commons.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CompletePageRoutingModule,
        CommonsModule
    ],
  declarations: [CompletePage]
})
export class CompletePageModule {}
