import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormSignComponent } from './form-sign/form-sign.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


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
    component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
