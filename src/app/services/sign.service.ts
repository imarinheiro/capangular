import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private readonly HOST = 'http://localhost:3000';
  private readonly PERSON_LIST = '/personList';
  private readonly URL = `${this.HOST}${this.PERSON_LIST}`;
  personList: Array<any> = [];

  constructor(private http: HttpClient) {
    this.getPersonList();
  }

  postPersonList(person: any) {
    this.setPersonId(person);
    return this.http.post(this.URL, person);
  }

  deletePerson(id: number) {
    const url = `${this.URL}/${id}`;
    console.log(url.toString());
    return this.http.delete(url);
  }

  getPersonList() {
    return this.http.get<any>(this.URL);
  }

  private setPersonId(person: any) {
    person.id = this.personList.length + 1;
  }
}
