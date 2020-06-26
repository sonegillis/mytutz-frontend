import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextInputComponent} from './text-input/text-input.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PrimaryButtonComponent} from './primary-button/primary-button.component';
import {SelectDropdownComponent} from './select-dropdown/select-dropdown.component';



@NgModule({
  declarations: [TextInputComponent, PrimaryButtonComponent, SelectDropdownComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
      TextInputComponent,
      PrimaryButtonComponent,
      SelectDropdownComponent
  ]
})
export class CommonsModule { }
