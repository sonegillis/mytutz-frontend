import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SearchSelectModalComponent} from '../../modals/search-select-modal/search-select-modal.component';
import {DropdownData} from '../../../services/interface';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  @Input() label = '';
  @Input() selectType: string;
  @Input() data: Array<DropdownData>
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async displayOptionsModal() {
    const modal = await this.modalCtrl.create(
        {
          component: SearchSelectModalComponent,
          cssClass: 'transparent-modal',
          componentProps: {
              label: this.label,
              selectType: this.selectType,
              data: this.data
          }
        }
    );
    await modal.present();
  }
}
