import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignService } from '../services/sign.service';
import { IEmployee } from '../model/iemployee';
import { Employee } from '../model/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  employeeForm: FormGroup;

  constructor(private signService: SignService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm(this.employee);
  }

  ngOnDestroy() {
    if (this.createEmployee$) {
      this.createEmployee$.unsubscribe();
    }
  }

  save(data: IEmployee) {
    console.log('form sign save call', data);
    this.createEmployee$ = this.signService.postPersonList(data)
      .subscribe(
        (res: object) => {
          this.signService.getEmployeeList();
          console.log('post person to db.json', res);
        },
        (err: any) => console.error(err)
      );
  }

  createForm(employee: IEmployee) {
    this.employeeForm = this.formBuilder.group({
      name: [employee.name, Validators.required],
      address: [employee.address, Validators.required],
      city: [employee.city, Validators.required],
      role: [employee.role, Validators.required]
    });
  }

  onSubmit() {
    this.save(this.employeeForm.value as IEmployee);
    this.employeeForm.reset(this.employee);
  }
}
