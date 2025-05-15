import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  profileForm: FormGroup;
  submittedData: any;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required]
      }),
      subscribe: [false]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.submittedData = this.profileForm.value;
      console.log('Form Submitted:', this.submittedData);
    }
  }

  setFormValues() {
    this.profileForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Springfield',
        zipCode: '62701'
      },
      subscribe: true
    });
  }

  patchFormValues() {
    this.profileForm.patchValue({
      firstName: 'Jane',
      email: 'jane.doe@example.com',
      address: {
        city: 'Chicago'
      }
    });
  }
}
