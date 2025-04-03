import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  perfilForm: FormGroup;
  imagenUrl: string = 'assets/default-avatar.png'; // Imagen por defecto

  constructor(private fb: FormBuilder, public router: Router) {
    this.perfilForm = this.fb.group({
      imagen: [null],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      tipoDocumento: ['', Validators.required],
      documento: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
  }

  cargarImagen(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenUrl = e.target.result;
      };
      reader.readAsDataURL(archivo);
    }
  }

  guardarPerfil() {
    if (this.perfilForm.valid) {
      console.log('Perfil guardado:', this.perfilForm.value);
      this.router.navigate(['/usuarios/dashboard']);
      alert('Perfil actualizado con éxito');
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
}