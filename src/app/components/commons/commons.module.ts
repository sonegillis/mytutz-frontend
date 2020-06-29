import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextInputComponent} from './text-input/text-input.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PrimaryButtonComponent} from './primary-button/primary-button.component';
import {SelectDropdownComponent} from './select-dropdown/select-dropdown.component';
import {SearchSelectModalComponent} from '../modals/search-select-modal/search-select-modal.component';
import {ModalsModule} from '../modals/modals.module';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';



@NgModule({
  declarations: [
    TextInputComponent,
    PrimaryButtonComponent,
    FileUploadComponent,
    SelectDropdownComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ModalsModule,
        FileUploadModule,
    ],
    exports: [
        TextInputComponent,
        PrimaryButtonComponent,
        SelectDropdownComponent,
        FileUploadComponent
    ],
    entryComponents: [
        SearchSelectModalComponent
    ]
})
export class CommonsModule { }
