import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  onLoadDataClick(): void{
    this.employeeForm.setValue({
      fullName: 'Vikas Salve',
      email: 'Vikas.dsalve@hotmail.com',
      skills:{
        skillName: 'C#',
        experienceInYears: 5,
        proficiency: 'beginner'
      }
    })
  }

  onSubmit(): void{
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

}
