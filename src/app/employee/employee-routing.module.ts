import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './list-employees.component';
import { CreateEmployeeComponent } from './create-employee.component';


const routes: Routes = [

    { path: '', component: ListEmployeesComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'edit/:id', component: CreateEmployeeComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class EmployeeRoutingModule  { }
