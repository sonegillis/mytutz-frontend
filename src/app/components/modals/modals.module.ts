import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchSelectModalComponent} from './search-select-modal/search-select-modal.component';



@NgModule({
  declarations: [SearchSelectModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
      SearchSelectModalComponent
  ]
})
export class ModalsModule { }
