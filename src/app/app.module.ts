import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormSignComponent} from './form-sign/form-sign.component';
import {FormsModule} from '@angular/forms';
import {CommonComponentsComponent} from './common-components/common-components.component';
import {InputFieldComponent} from './common-components/input-field/input-field.component';
import {SelectFieldComponent} from './common-components/select-field/select-field.component';
import {SignService} from './services/sign.service';
import {HttpClientModule} from '@angular/common/http';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormSignComponent,
    CommonComponentsComponent,
    InputFieldComponent,
    SelectFieldComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    SignService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
