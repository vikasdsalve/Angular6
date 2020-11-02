import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  formErrors = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };

  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });
}

logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        // console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
        // abstractControl.markAsDirty();
        // abstractControl.disable();
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid){
          const message = this.validationMessages[key];
          console.log(message);
          for (const errorkey in abstractControl.errors){
            if (errorkey){
              this.formErrors[key] += message[errorkey] + ' ';
            }
          }
        }
      }
    });
  }

onLoadDataClick(): void {
 this.logValidationErrors(this.employeeForm);
 console.log(this.formErrors);
}

onSubmit(): void {
  console.log(this.employeeForm.touched);
  console.log(this.employeeForm.value);

  console.log(this.employeeForm.controls.fullName.touched);
  console.log(this.employeeForm.get('fullName').value);
}

}
