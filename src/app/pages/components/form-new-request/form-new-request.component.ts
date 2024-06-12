import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-new-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-new-request.component.html',
  styleUrl: './form-new-request.component.css'
})
export class FormNewRequestComponent {
  myForm: FormGroup;
  options = ['Visual Studio Code', 'Figma', 'SQL Managment', 'Draw io'];
  subjects = ['Frontend', 'Backend', 'Desarrollo en la Nube', 'Ingeniería de software']

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      requestedPrograms: ['', [Validators.required]],
      selectedSubject: ['', [Validators.required]],
      requestedAmount: ['', [Validators.required]],
      requestedDate: ['', [Validators.required]],
      observations: ['', [Validators.required]]

    });
  }

  submitForm() {
    if (this.myForm.valid) {
      return this.myForm.value
    }
  }

  resetForm() {
    this.myForm.reset(); 
  }


}
