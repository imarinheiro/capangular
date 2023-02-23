import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from '../model/iemployee';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private readonly HOST = 'http://localhost:3000';
  private readonly PERSON_LIST = '/personList';
  private readonly URL = `${this.HOST}${this.PERSON_LIST}`;
  private behaviorSubject = new BehaviorSubject<IEmployee[]>([]);

  constructor(private http: HttpClient) {
    this.getEmployeeList();
  }

  get all() {
    return this.behaviorSubject.asObservable();
  }

  postPersonList(person: IEmployee) {
    this.setPersonId(person);
    return this.http.post(this.URL, person);
  }

  deletePerson(id: number) {
    const url = `${this.URL}/${id}`;
    console.log(url.toString());
    return this.http.delete(url);
  }

  getEmployeeList() {
    this.http.get<IEmployee[]>(this.URL)
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
