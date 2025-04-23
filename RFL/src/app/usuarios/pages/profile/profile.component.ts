import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpresionesR } from 'app/core/config/expresiones-R';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  // Definición del formulario de perfil
  perfilForm: FormGroup;

  // Imagen por defecto para el perfil si el usuario no sube ninguna
  imagenUrl: string = 'assets/default-avatar.png'; 

  // Variables para mostrar mensajes de éxito o error al guardar
  mensajeExito: boolean = false;
  mensajeError: boolean = false;

  // Variable que muestra un error si el formato de imagen es inválido
  imagenInvalida: boolean = false;

  // Constructor donde se configura el formulario y sus validaciones
  constructor(private fb: FormBuilder, public router: Router) {
    this.perfilForm = this.fb.group({
      // Campo de nombres, obligatorio y con formato definido
      nombres: ['', [Validators.required, Validators.pattern(ExpresionesR.NOMBRE)]],
      // Campo de correo, obligatorio y validado con expresión regular
      correo: ['', [Validators.required, Validators.pattern(ExpresionesR.EMAIL)]],
      // Campo de tipo de documento, obligatorio
      tipoDocumento: ['', Validators.required],
      // Campo de número de documento, obligatorio y con validación
      documento: ['', [Validators.required, Validators.pattern(ExpresionesR.DOCUMENTO)]]
    });
    // 🔽 Simulación de datos cargados
    this.perfilForm.setValue({
      nombres: 'Pepito',
      correo: 'pepito@gmail.com',
      tipoDocumento: 'CC',
      documento: '1234567890'
    });

  }

  // Función que se activa cuando el usuario carga una imagen de perfil
  cargarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const archivo = input.files[0]; // Obtiene el archivo cargado
      const nombre = archivo.name.toLowerCase(); // Convierte el nombre a minúsculas para validar la extensión

      // Valida que el archivo tenga una extensión de imagen permitida (jpg, png, etc.)
      if (!ExpresionesR.FORMATO_IMAGEN.test(nombre)) {
        this.imagenInvalida = true;
        return;
      }

      this.imagenInvalida = false;

      // Lee el archivo como base64 para mostrarlo en la interfaz
      const lector = new FileReader();
      lector.onload = () => {
        this.imagenUrl = lector.result as string; // Se asigna la imagen al perfil
      };
      lector.readAsDataURL(archivo); // Inicia la lectura del archivo
    }
  }

  // Función que se ejecuta al guardar el perfil
  guardarPerfil(): void {
    // Si el formulario es inválido, muestra mensaje de error
    if (this.perfilForm.invalid) {
      this.mensajeExito = false;
      this.mensajeError = true;
      return;
    }
    
    // Simulamos una edición (por ejemplo: cambiaron el nombre y correo)
    const datosEditados = this.perfilForm.value;
    console.log('Perfil editado con éxito:');
    console.log('Nombre:', datosEditados.nombres);
    console.log('Correo:', datosEditados.correo);
    console.log('Tipo de Documento:', datosEditados.tipoDocumento);
    console.log('Documento:', datosEditados.documento);

    // Si es válido, muestra mensaje de éxito y guarda los datos en consola
    console.log(this.perfilForm.value);
    this.mensajeExito = true;
    this.mensajeError = false;

    setTimeout(() => {
      this.router.navigate(['/usuarios/dashboard']);
    }, 2000);
  }

}