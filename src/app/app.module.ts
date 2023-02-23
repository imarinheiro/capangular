import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormSignBackupComponent } from './form-sign-backup/form-sign-backup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './common-components/input-field/input-field.component';
import { SelectFieldComponent } from './common-components/select-field/select-field.component';
import { SignService } from './services/sign.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormSignComponent } from './form-sign/form-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputFieldComponent,
    SelectFieldComponent,
    FormSignBackupComponent,
    FormSignComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    SignService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
