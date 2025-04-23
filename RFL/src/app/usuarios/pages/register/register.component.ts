import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpresionesR } from 'app/core/config/expresiones-R';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // Definición de la variable que almacenará el formulario de registro
  registerForm: FormGroup;

  // Constructor del componente que inicializa el formulario y el router
  constructor(public fb: FormBuilder, public router: Router) {
    // Creación del formulario con los campos requeridos y sus validaciones
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(ExpresionesR.NOMBRE)]],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern(ExpresionesR.DOCUMENTO)]],
      correo: ['', [Validators.required, Validators.pattern(ExpresionesR.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(ExpresionesR.PASSWORD)]],
    });
  }

  // Función que se ejecuta cuando el usuario envía el formulario
  onSubmit() {
    // Verifica si el formulario es válido antes de continuar
    if (this.registerForm.valid) {
      console.log('Registro exitoso', this.registerForm.value);  // Muestra en consola los datos ingresados
      this.router.navigate(['/usuarios/login']);  // Redirige al usuario a la página de inicio de sesión
    } else {
      console.log('Formulario inválido');  // Muestra un mensaje de error en la consola si el formulario es inválido
      this.registerForm.markAllAsTouched();  // Marca todos los campos como "tocados" para que se muestren los errores
    }
  }
}