import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchSelectModalComponent} from './search-select-modal/search-select-modal.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SearchSelectModalComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
  exports: [SearchSelectModalComponent]

})
export class ModalsModule { }
