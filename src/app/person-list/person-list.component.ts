import { Component, OnInit } from '@angular/core';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['../app.component.css', './person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(public signService: SignService) {
    // Todo: make dependency private
  }

  ngOnInit() {
  }

}
