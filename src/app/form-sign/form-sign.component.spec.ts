import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignComponent } from './form-sign.component';

describe('FormSignComponent', () => {
  let component: FormSignComponent;
  let fixture: ComponentFixture<FormSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
