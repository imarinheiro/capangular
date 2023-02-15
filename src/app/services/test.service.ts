import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  postPerson(person: any) {
    this.http.post('http://localhost:3000/personList', person)
      .subscribe((res: any) => {
          console.log('POST success!');
        },
        (err: any) => console.error(err)
      );
  }
}
