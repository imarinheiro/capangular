import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['../../app.component.css', './select-field.component.css']
})
export class SelectFieldComponent implements OnInit {

  @Input() type: string;
  @Input() label: string;
  @Input() name: string;
  @Input() value: string;
  @Input() optionList: Array<string>;
  @Output() valueEmitter = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit() {
  }

  sendValue(value: string) {
    this.valueEmitter.emit(value);
  }
}
