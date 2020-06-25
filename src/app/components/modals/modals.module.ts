import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchSelectModalComponent} from './search-select-modal/search-select-modal.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [SearchSelectModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
      SearchSelectModalComponent
  ]
})
export class ModalsModule { }
