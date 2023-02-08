import {Component, OnInit} from '@angular/core';
import {SignService} from '../services/sign.service';

@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['../app.component.css', './form-sign.component.css']
})
export class FormSignComponent implements OnInit {

  private person = {
    id: null,
    name: '',
    address: '',
    city: '',
    role: '',
  };

  roleList: Array<string> = [
    'Developer',
    'Archtect',
    'QA',
    'Squad Leader',
    'Scrum Master',
    'DBA',
  ];


  constructor(private signService: SignService) {
  }

  ngOnInit() {
  }

  clear() {
    this.person = {
      id: null,
      name: '',
      address: '',
      city: '',
      role: '',
    };
    console.log('clear call', this.person);
  }

  save() {
    console.log('save call', this.person);
    this.signService.postPersonList(this.person);
    this.clear();
  }

  nameReceiver(value) {
    this.person.name = value;
    console.log('receiving name data', value);
  }

  cityReceiver(value) {
    this.person.city = value;
    console.log('receiving city data', value);
  }

  addressReceiver(value) {
    this.person.address = value;
    console.log('receiving address data', value);
  }

  setPersonId() {
    this.person.id = this.signService.personList.length + 1;
  }

}
