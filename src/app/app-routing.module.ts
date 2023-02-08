import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormSignComponent} from './form-sign/form-sign.component';
import {PersonListComponent} from './person-list/person-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'sign',
    component: FormSignComponent
  }, {
    path: 'list',
    component: PersonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
