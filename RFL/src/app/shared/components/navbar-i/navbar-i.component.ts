import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-i',
  standalone: false,
  templateUrl: './navbar-i.component.html',
  styleUrl: './navbar-i.component.scss'
})
export class NavbarIComponent {
  // Variable booleana que indica si el menú (en móviles o pantallas pequeñas) está abierto o cerrado
  isMenuOpen = false; 

  // Función que cambia el estado del menú: si está abierto lo cierra y viceversa
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}