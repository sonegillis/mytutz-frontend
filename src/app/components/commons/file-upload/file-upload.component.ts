import {Component, Input, OnInit} from '@angular/core';
import {DropdownData} from '../../../services/interface';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Input() label = '';
  @Input() selectType: string;
  @Input() data: Array<DropdownData>;
  constructor() { }

  ngOnInit() {}

}
