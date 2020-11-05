import { NgModule } from '@angular/core';

import { EmployeeRoutingModule } from './employee-routing.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent],
  imports: [
    EmployeeRoutingModule,
    SharedModule
  ],
})
export class EmployeeModule { }
