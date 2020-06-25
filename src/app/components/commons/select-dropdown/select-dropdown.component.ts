import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SearchSelectModalComponent} from '../../modals/search-select-modal/search-select-modal.component';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit {
  @Input() label = '';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async displayOptionsModal() {
    const modal = await this.modalCtrl.create(
        {
          component: SearchSelectModalComponent,
          cssClass: 'transparent-modal'
        }
    );
    await modal.present();
  }
}
