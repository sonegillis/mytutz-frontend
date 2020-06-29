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
  @Input() data: Array<DropdownData>;
  value = '';
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
    window.history.pushState('', '');
    modal.onDidDismiss().then(resp => {
        if (resp.data) { this.setDropDownValue(resp.data); }
    });
    await modal.present();
  }

  setDropDownValue(data) {
      this.value = '';
      for (const item of data) {
          if (this.selectType === 'checkbox' && item.selected) {
              this.value += item.name;
              this.value += ', ';
          } else if (item.selected) {
              this.value = item.name;
              break;
          }
      }
  }
}
