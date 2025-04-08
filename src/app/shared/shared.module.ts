// Importamos funcionalidades necesarias desde Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo base que nos permite usar directivas comunes como *ngIf o *ngFor
import { RouterModule } from '@angular/router'; // Para permitir navegación desde los componentes compartidos

// Importamos los componentes reutilizables del proyecto (footer y barras de navegación)
import { FooterIComponent } from './components/footer-i/footer-i.component';      // Footer de la vista de inicio
import { NavbarIComponent } from './components/navbar-i/navbar-i.component';      // Navbar para la vista inicial
import { NavbarDComponent } from './components/navbar-d/navbar-d.component';      // Navbar para el dashboard o menú principal
import { NavbarFlComponent } from './components/navbar-fl/navbar-fl.component';   // Navbar para el módulo financiero laboral

// Importamos FontAwesomeModule para poder usar íconos de FontAwesome en nuestros componentes
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  // Declaramos los componentes que se van a usar de forma compartida en diferentes módulos
  declarations: [
    FooterIComponent, 
    NavbarIComponent, 
    NavbarDComponent, 
    NavbarFlComponent 
  ],

  // Importamos los módulos necesarios para que los componentes funcionen correctamente
  imports: [
    CommonModule,       // Para usar ngIf, ngFor y demás directivas comunes
    RouterModule,       // Permite usar navegación en botones o enlaces de los navbars
    FontAwesomeModule   // Nos permite usar íconos llamativos y visuales
  ],

  // Exportamos los componentes para que otros módulos puedan usarlos (como usuarios.module.ts)
  exports: [
    FooterIComponent,
    NavbarIComponent, 
    NavbarDComponent, 
    NavbarFlComponent 
  ],
})

// Este módulo agrupa componentes que se usan en varias partes del proyecto (navbars y footer),
// evitando tener que importarlos uno por uno en cada módulo.
export class SharedModule { }
