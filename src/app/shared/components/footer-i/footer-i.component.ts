import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-i', // Nombre con el que se usará este componente en la plantilla (ej: <app-footer-i></app-footer-i>)
  standalone: false, // Indica que este componente no es independiente y forma parte de un módulo
  templateUrl: './footer-i.component.html',
  styleUrl: './footer-i.component.scss'
})
export class FooterIComponent {
  // Variable para obtener el año actual dinámicamente
  currentYear: number = new Date().getFullYear();

  // Lista de mensajes que se mostrarán en el footer, cada uno con un icono y un texto descriptivo
  messages = [
    { icon: 'fas fa-chart-line', text: 'Transforma tu gestión financiera personal y laboral' },
    { icon: 'fas fa-piggy-bank', text: 'Planifica, ahorra y optimiza cada ingreso' },
    { icon: 'fas fa-lightbulb', text: 'Toma decisiones inteligentes con reportes detallados' },
    { icon: 'fas fa-coins', text: 'Porque el éxito financiero comienza con una buena administración' }
  ];

}
