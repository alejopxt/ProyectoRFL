import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  recoveryForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  // Validar que ambas contraseñas coincidan
  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')!.value === form.get('confirmPassword')!.value 
      ? null : { mismatch: true };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.recoveryForm.valid) {
      alert('Contraseña actualizada con éxito');
    }
  }
}