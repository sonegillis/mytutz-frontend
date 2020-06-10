import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextInputComponent} from './text-input/text-input.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PrimaryButtonComponent} from './primary-button/primary-button.component';



@NgModule({
  declarations: [TextInputComponent, PrimaryButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
      TextInputComponent,
      PrimaryButtonComponent
  ]
})
export class CommonsModule { }
