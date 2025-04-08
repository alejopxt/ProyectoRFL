import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpresionesR } from 'app/core/config/expresiones-R';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  // Formulario de recuperación de contraseña (tipo FormGroup)
  recoveryForm: FormGroup;

  // Controla si la contraseña se muestra o no (true = visible, false = oculta)
  showPassword: boolean = false;

  // Constructor donde se crean las dependencias del formulario y la navegación
  constructor(private fb: FormBuilder, public router: Router) {
    // Creamos el formulario con un solo campo: newPassword
    // Se valida que sea obligatorio y que cumpla con una expresión regular definida en ExpresionesR.PASSWORD
    this.recoveryForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.pattern(ExpresionesR.PASSWORD)]]
    }); 
  }

  // Función que alterna la visibilidad de la contraseña (mostrar/ocultar)
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    // Si el formulario es inválido (por ejemplo, el campo está vacío o no cumple el patrón), se muestran los errores
    if (this.recoveryForm.invalid) {
      this.recoveryForm.markAllAsTouched(); // Marca todos los campos como "tocados" para mostrar los errores en pantalla
      return;
    }

    // Si todo es válido, muestra un mensaje de éxito y redirige al login
    alert('Contraseña actualizada con éxito');
    this.router.navigate(['/usuarios/login']); // Navega a la página de inicio de sesión
  }
}