import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  person = {
    id: null,
    name: '',
    city: '',
    address: '',
    role: '',
  };

  roleList: Array<string> = [
    'Developer',
    'Architect',
    'QA',
    'Squad Leader',
    'Scrum Master',
    'DBA',
  ];


  constructor(private testService: TestService) {
  }

  ngOnInit() {
  }

  save() {
    this.testService.postPerson(this.person);
  }

  clear() {
    this.person = {
      id: null,
      name: '',
      city: '',
      address: '',
      role: '',
    };
    console.log('clear call', this.person);
  }

  nameReceiver(value) {
    this.person.name = value;
    console.log('receiving name data', value);
  }

  addressReceiver(value) {
    this.person.address = value;
    console.log('receiving address data', value);
  }

  cityReceiver(value) {
    this.person.city = value;
    console.log('receiving city data', value);
  }

  roleReceiver(value) {
    this.person.role = value;
    console.log('receiving role data', value);
  }
}
