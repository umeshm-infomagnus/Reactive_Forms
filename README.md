# Angular Reactive Forms Example

This repository provides an example implementation of Angular Reactive Forms, showcasing key features such as Form Control, Form Group, Nested Form Groups, Set Value & Patch Value, FormBuilder, and Reactive Form Validation. The project is built with Angular and demonstrates best practices for creating dynamic and validated forms.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Form Control](#form-control)
  - [Form Group](#form-group)
  - [Nested Form Groups](#nested-form-groups)
  - [Set Value & Patch Value](#set-value--patch-value)
  - [FormBuilder](#formbuilder)
  - [Reactive Form Validation](#reactive-form-validation)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Form Control**: Individual form inputs with reactive bindings.
- **Form Group**: Grouping multiple form controls into a single unit.
- **Nested Form Groups**: Organizing complex forms with hierarchical structure.
- **Set Value & Patch Value**: Programmatically updating form values.
- **FormBuilder**: Simplifying form creation with a declarative API.
- **Reactive Form Validation**: Built-in and custom validations for robust form handling.

## Prerequisites
- Node.js (v16 or higher)
- Angular CLI (v16 or higher)
- A modern web browser

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/angular-reactive-forms-example.git
   ```
2. Navigate to the project directory:
   ```bash
   cd angular-reactive-forms-example
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200`.

## Project Structure
```
angular-reactive-forms-example/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── reactive-form/
│   │   │   │   ├── reactive-form.component.ts
│   │   │   │   ├── reactive-form.component.html
│   │   │   │   ├── reactive-form.component.css
│   ├── app.module.ts
├── README.md
├── package.json
```

## Usage
Below is an overview of the implemented features with code examples.

### Form Control
A `FormControl` is used to manage individual input fields.
```typescript
import { FormControl } from '@angular/forms';

emailControl = new FormControl('');
```

### Form Group
A `FormGroup` aggregates multiple `FormControl` instances.
```typescript
import { FormGroup, FormControl } from '@angular/forms';

profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl('')
});
```

### Nested Form Groups
Organize complex forms by nesting `FormGroup` instances.
```typescript
profileForm = new FormGroup({
  name: new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  }),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl('')
  })
});
```

### Set Value & Patch Value
Update form values programmatically.
```typescript
// Set Value (requires all values)
this.profileForm.setValue({
  name: { firstName: 'John', lastName: 'Doe' },
  address: { street: '123 Main St', city: 'Anytown' }
});

// Patch Value (partial update)
this.profileForm.patchValue({
  name: { firstName: 'Jane' }
});
```

### FormBuilder
Use `FormBuilder` for a cleaner form definition.
```typescript
import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) {
  this.profileForm = this.fb.group({
    name: this.fb.group({
      firstName: [''],
      lastName: ['']
    }),
    address: this.fb.group({
      street: [''],
      city: ['']
    })
  });
}
```

### Reactive Form Validation
Apply built-in and custom validators.
```typescript
import { Validators } from '@angular/forms';

this.profileForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
});

// Custom validator example
function customValidator(control: FormControl): { [key: string]: any } | null {
  return control.value.includes('example') ? { invalidWord: true } : null;
}
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
