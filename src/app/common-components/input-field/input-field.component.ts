import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['../../app.component.css', './input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() name: string;
  @Input() value: string;
  @Output() valueEmitter = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit() {
  }

  sendValue(value: string) {
    this.valueEmitter.emit(value);
  }
}
