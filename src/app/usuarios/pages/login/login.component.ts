import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpresionesR } from 'app/core/config/expresiones-R';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Definimos el formulario de login como un FormGroup
  loginForm: FormGroup;

  // Controla si la contraseña se muestra o no (true = visible)
  showPassword: boolean = false;

  // Constructor: se inicializa el formulario con validaciones
  constructor(public fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      usuario: [
        '', 
        [Validators.required, Validators.pattern(ExpresionesR.EMAIL)] // Campo obligatorio y debe cumplir con formato de email
      ],
      password: [
        '', 
        [Validators.required, Validators.pattern(ExpresionesR.PASSWORD)] // Campo obligatorio y debe cumplir con formato de contraseña
      ]
    });    
  }

  // Función para mostrar u ocultar la contraseña (intercambia true/false)
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    // Si el formulario es válido, muestra los datos por consola y redirige al dashboard
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value); 
      this.router.navigate(['/usuarios/dashboard']); // Redirige a la pantalla principal del usuario
    } else {
      console.log('Formulario inválido'); // Muestra error en consola si el formulario no es válido
    }
  }
}