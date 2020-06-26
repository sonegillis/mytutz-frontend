import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DropdownData} from '../../../services/interface';

@Component({
  selector: 'app-search-select-modal',
  templateUrl: './search-select-modal.component.html',
  styleUrls: ['./search-select-modal.component.scss'],
})
export class SearchSelectModalComponent implements OnInit {
  header: string;
  selectionType: string;
  data: Array<DropdownData>;
  constructor(private navParams: NavParams,
              private modalCtrl: ModalController) {
    const data = this.navParams.data;
    this.header = data.label;
    this.selectionType = data.selectionType;
    this.data = data.data as Array<DropdownData>;
    console.log(data);
  }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
