import { Component, OnInit } from '@angular/core';
import { SignService } from '../services/sign.service';
import { map } from 'rxjs/operators';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['../app.component.css', './person-list.component.css']
})
export class PersonListComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(private signService: SignService) {
  }

  ngOnInit() {
    this.getListEmployee();
  }

  getListEmployee() {
    return this.signService.getPersonList()
      .pipe(
        map(res => {
          return res.map(item => {
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
        (res: any[]) => {
          this.employeeList = res;
          console.log('get person list call from db.json', this.employeeList);
        },
        (err: any) => console.error(err)
      );
  }

  deleteEmployee(id: number) {
    this.signService.deletePerson(id)
      .subscribe(
        (res: any) => {
          console.log('remove person', id, 'from db.json', res);
        },
        (err: any) => console.error(err)
      );
  }

}
