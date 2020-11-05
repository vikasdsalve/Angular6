import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
})
export class EmployeeModule { }
