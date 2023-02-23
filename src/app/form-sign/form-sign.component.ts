import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignService } from '../services/sign.service';
import { IEmployee } from '../model/iemployee';
import { Employee } from '../model/employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['../app.component.css', './form-sign.component.css']
})
export class FormSignComponent implements OnInit, OnDestroy {
  createEmployee$: Subscription;


  employee: IEmployee = new Employee(null, '', '', '', '');

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

  ngOnDestroy() {
    if (this.createEmployee$) {
      this.createEmployee$.unsubscribe();
    }
  }

  getDataReceiver(data: string, field: keyof IEmployee): void {
    this.employee[`${field}`] = data;
  }

  clear() {
    this.employee = new Employee(null, '', '', '', '');
    console.log('form sign clear call', this.employee);
  }

  save() {
    console.log('form sign save call', this.employee);
    this.createEmployee$ = this.signService.postPersonList(this.employee)
      .subscribe(
        (res: object) => {
          this.clear();
          this.signService.getEmployeeList();
          console.log('post person to db.json', res);
        },
        (err: any) => console.error(err)
      );
  }
}
