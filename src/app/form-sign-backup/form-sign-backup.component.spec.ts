import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignBackupComponent } from './form-sign-backup.component';

describe('FormSignComponent', () => {
  let component: FormSignBackupComponent;
  let fixture: ComponentFixture<FormSignBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSignBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSignBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
