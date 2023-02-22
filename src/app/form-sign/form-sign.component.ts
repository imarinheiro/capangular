import { Component, OnInit } from '@angular/core';
import { SignService } from '../services/sign.service';
import { IEmployee } from '../model/iemployee';

@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['../app.component.css', './form-sign.component.css']
})
export class FormSignComponent implements OnInit {

  employee: IEmployee = {
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


  constructor(private signService: SignService) {
  }

  ngOnInit() {
  }

  clear() {
    this.employee = {
      id: null,
      name: '',
      city: '',
      address: '',
      role: '',
    };
    console.log('clear call', this.employee);
  }

  save() {
    console.log('save call', this.employee);
    this.signService.postPersonList(this.employee)
      .subscribe(
        (res: any) => {
          console.log('post person to db.json', res);
        },
        (err: any) => console.error(err)
      );
    this.clear();
  }

  getDataReceiver(data: string, field: keyof IEmployee): void {
    this.employee[`${field}`] = data;
  }

}
