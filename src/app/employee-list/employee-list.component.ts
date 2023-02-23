import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignService } from '../services/sign.service';
import { map } from 'rxjs/operators';
import { Employee } from '../model/employee';
import { IEmployee } from '../model/iemployee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['../app.component.css', './employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employeeList$: Subscription;
  employeeList: IEmployee[] = [];

  constructor(private signService: SignService) {
  }

  ngOnInit() {
    this.getListEmployee();
  }

  ngOnDestroy() {
    if (this.employeeList$) {
      this.employeeList$.unsubscribe();
    }
  }

  getListEmployee() {
    this.employeeList$ = this.signService.all
      .pipe(
        map((data: IEmployee[]) => {
          console.log(data.toString());
          return data.map((item: IEmployee) => {
            return new Employee(
              item.id,
              item.name,
              item.address,
              item.city,
              item.role
            );
          });
        }))
      .subscribe(
        (data: IEmployee[]) => {
          this.employeeList = data;
          console.log('get person list call from sign service', this.employeeList);
        },
        (err: any) => console.error(err)
      );
  }

  deleteEmployee(id: number) {
    this.signService.deletePerson(id)
      .subscribe(
        (res: object) => {
          console.log('remove person', id, 'from db.json', res);
          this.signService.getEmployeeList();
        },
        (err: any) => console.error(err)
      );
  }
}
