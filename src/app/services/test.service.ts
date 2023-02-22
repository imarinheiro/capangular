import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  postPerson(person: any) {
    return this.http.post<any>('http://localhost:3000/personList', person);
  }
}
