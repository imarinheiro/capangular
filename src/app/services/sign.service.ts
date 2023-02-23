import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from '../model/iemployee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private readonly API = `${environment.apiURL}/personList`;
  private behaviorSubject = new BehaviorSubject<IEmployee[]>([]);

  constructor(private http: HttpClient) {
    this.getEmployeeList();
  }

  get all() {
    return this.behaviorSubject.asObservable();
  }

  postPersonList(person: IEmployee) {
    this.setPersonId(person);
    return this.http.post(this.API, person);
  }

  deletePerson(id: number) {
    const url = `${this.API}/${id}`;
    console.log(url.toString());
    return this.http.delete(url);
  }

  getEmployeeList() {
    this.http.get<IEmployee[]>(this.API)
      .subscribe(
        res => {
          this.behaviorSubject.next(res);
          console.log('get person list call from db.json', this.all);
        },
        error => console.log('could not get person list from db.json.', error)
      );
  }

  private setPersonId(person: IEmployee) {
    let employeeList: any = [];
    this.behaviorSubject.subscribe(data => employeeList = data);
    const lastId: number = Math.max(...employeeList.map(o => o.y), 0);
    person.id = lastId + 1;
    console.log(`creating new person id - new person id [${person.id}], retrieve last id [${lastId}]`);
  }
}
