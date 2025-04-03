import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-i',
  standalone: false,
  templateUrl: './navbar-i.component.html',
  styleUrl: './navbar-i.component.scss'
})
export class NavbarIComponent {
  isMenuOpen = false; // Variable booleana para controlar si el menú está abierto o cerrado

  // Método para alternar el estado del menú entre abierto y cerrado
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia el valor de isMenuOpen (true/false)
  }
}
