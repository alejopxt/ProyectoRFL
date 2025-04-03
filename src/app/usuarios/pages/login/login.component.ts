import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Definimos la variable que manejará el formulario de login
  loginForm: FormGroup;
  
 
  // Constructor donde inyectamos FormBuilder para construir el formulario y Router para la navegación
  constructor(public fb: FormBuilder, public router: Router) {
    // Inicializamos el formulario con sus campos y validaciones
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required], // Campo obligatorio para el usuario (correo)
      password: ['', [Validators.required, Validators.minLength(8)]] // Campo obligatorio con mínimo 8 caracteres
    });
  }

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    // Verificamos si el formulario es válido
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value); // Imprime los datos del formulario en la consola
      this.router.navigate(['/usuarios/dashboard']); // Redirige al usuario al dashboard si el login es exitoso
    } else {
      console.log('Formulario inválido'); // Mensaje en consola si hay errores en el formulario
    }
  }
}