import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['../../app.component.css', './select-field.component.css']
})
export class SelectFieldComponent implements OnInit {

  @Input() type: string;
  @Input() label: string;
  @Input() name: string;
  @Input() optionList: Array<string>;
  value: string;

  constructor() {
  }

  ngOnInit() {
  }

}
