import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  // Arreglo de objetos que representan las funcionalidades o características principales del sistema
  // Cada uno tiene un ícono, un título y una breve descripción
  features = [
    { 
      icon: 'fas fa-wallet', // Ícono de billetera (usando Font Awesome)
      title: 'Gestión de Ingresos y Gastos', // Título de la funcionalidad
      description: 'Controla cada entrada y salida de dinero fácilmente.' // Descripción breve de su utilidad
    },
    { 
      icon: 'fas fa-chart-line', 
      title: 'Análisis de Rendimiento', 
      description: 'Evalúa tu desempeño financiero con gráficos detallados.' 
    },
    { 
      icon: 'fas fa-piggy-bank', 
      title: 'Planificación de Ahorro', 
      description: 'Establece metas de ahorro y cúmplelas con estrategias efectivas.' 
    },
    { 
      icon: 'fas fa-file-alt', 
      title: 'Informes Detallados', 
      description: 'Obtén reportes personalizados para mejores decisiones.' 
    }
  ];
}