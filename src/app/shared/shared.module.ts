import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterIComponent } from './components/footer-i/footer-i.component';
import { NavbarIComponent } from './components/navbar-i/navbar-i.component';
import { NavbarDComponent } from './components/navbar-d/navbar-d.component';
import { NavbarFlComponent } from './components/navbar-fl/navbar-fl.component';

// Definimos un módulo compartido que agrupa estos componentes
@NgModule({
  declarations: [
    FooterIComponent, // Declaramos
    NavbarIComponent, // Declaramos
    NavbarDComponent, // Declaramos
    NavbarFlComponent // Declaramos
  ],
  imports: [
    CommonModule, // Importamos CommonModule para usar funciones básicas de Angular
    RouterModule // Importamos RouterModule para manejar las rutas en los componentes
  ],
  exports: [
    FooterIComponent, // Permitimos que otros módulos usen
    NavbarIComponent, // Permitimos que otros módulos usen
    NavbarDComponent, // Permitimos que otros módulos usen
    NavbarFlComponent // Permitimos que otros módulos usen
  ],
})
export class SharedModule { } // Exportamos el módulo para que pueda ser utilizado en otros lugares de la aplicación
