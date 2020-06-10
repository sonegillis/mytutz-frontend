import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() label;
  inputFocused = false;
  value = '';
  passwordVisible = false;
  @Input() type = 'text';
  @Input() originalType = 'text';

  constructor() { }

  ngOnInit() { this.originalType = this.type; }

}
