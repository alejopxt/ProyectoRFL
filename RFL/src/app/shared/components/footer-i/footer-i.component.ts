import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-i', 
  standalone: false, 
  templateUrl: './footer-i.component.html',
  styleUrl: './footer-i.component.scss'
})
export class FooterIComponent {
  // Propiedad que obtiene el año actual automáticamente (por ejemplo: 2025)
  // Se puede mostrar en el pie de página para que se actualice solo cada año
  currentYear: number = new Date().getFullYear();

  // Lista de mensajes motivacionales o informativos que se muestran en el footer
  // Cada uno incluye un ícono de FontAwesome y un texto
  messages = [
    { icon: 'fas fa-chart-line', text: 'Transforma tu gestión financiera personal y laboral' },
    { icon: 'fas fa-piggy-bank', text: 'Planifica, ahorra y optimiza cada ingreso' },
    { icon: 'fas fa-lightbulb', text: 'Toma decisiones inteligentes con reportes detallados' },
    { icon: 'fas fa-coins', text: 'Porque el éxito financiero comienza con una buena administración' }
  ];

}
