import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams, Platform} from '@ionic/angular';
import {DropdownData} from '../../../services/interface';

@Component({
  selector: 'app-search-select-modal',
  templateUrl: './search-select-modal.component.html',
  styleUrls: ['./search-select-modal.component.scss'],
})
export class SearchSelectModalComponent implements OnInit {
  header: string;
  selectType: string;
  data: Array<DropdownData>;
  filteredData: Array<DropdownData>;
  selectedRadio: string;
  constructor(private navParams: NavParams,
              private platform: Platform,
              private modalCtrl: ModalController) {
    const data = this.navParams.data;
    this.header = data.label;
    this.selectType = data.selectType;
    this.data = data.data as Array<DropdownData>;
    this.filteredData = this.data;
    if (this.selectType === 'radio') {
      this.selectedDefaultRadio();
    }
  }

  ngOnInit() {}

  dismissModal() {
    if (this.selectType === 'radio') {
      for (const item of this.data) {
        if (item.id === Number.parseInt(this.selectedRadio, 10)) {
          item.selected = true;
          break;
        }
      }
    }
    this.modalCtrl.dismiss(this.data);
    window.history.back();
  }

  filterData($event: CustomEvent) {
    const value = $event.detail.value;
    this.filteredData = this.data.filter(item => item.name.toLocaleLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  selectedDefaultRadio() {
    for (const item of this.data) {
      if (item.selected === true) {
        this.selectedRadio = item.id.toString();
      }
    }
  }
}
