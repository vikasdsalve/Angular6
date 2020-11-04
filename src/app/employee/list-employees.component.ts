import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (employeeList) => this.employees = employeeList,
      (err) => console.log(err)
    );
  }

}
