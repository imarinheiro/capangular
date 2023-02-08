import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  personList: Array<any> = [];

  constructor(private http: HttpClient) {
    this.getPersonList();
  }

  postPersonList(person: any) {
    this.setPersonId(person);
    this.http.post('http://localhost:3000/personList', person)
      .subscribe(
        (res: any) => {
          this.addPerson(person);
          console.log('post person list call to db.json', res, this.personList);
        },
        (err) => console.error(err)
      );
  }

  removePerson(id: number) {
    const url = `http://localhost:3000/personList/${id}`;
    this.http.delete(url)
      .subscribe(
        (res: any) => {
          this.getPersonList();
          console.log('remove person', id, 'from db.json', res, this.personList);
        },
        (err) => console.error(err)
      );
  }

  private getPersonList() {
    this.http.get('http://localhost:3000/personList')
      .subscribe(
        (res: any[]) => {
          this.personList = res;
          console.log('get person list call from db.json', this.personList);
        },
        (err) => console.error(err)
      );
  }

  private addPerson(person: any) {
    console.log('add person call', person, 'to', this.personList);
    this.personList.push(person);
  }

  private setPersonId(person: any) {
    person.id = this.personList.length + 1;
  }
}
