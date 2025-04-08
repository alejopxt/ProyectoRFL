// Importamos el decorador Component desde Angular core, necesario para definir un componente
import { Component } from '@angular/core';

// Decorador @Component que define las características del componente
@Component({
  // 'selector' es el nombre que usaremos para insertar este componente en el HTML (por ejemplo: <app-dashboard>)
  selector: 'app-dashboard',

  // 'standalone' indica si el componente es independiente. En este caso es false porque es parte de un módulo.
  standalone: false,

  // 'templateUrl' indica la ruta del archivo HTML que se usará como plantilla de este componente
  templateUrl: './dashboard.component.html',

  // 'styleUrl' indica la hoja de estilos específica del componente (estilo SCSS)
  styleUrl: './dashboard.component.scss'
})

// Clase principal del componente 'DashboardComponent'
export class DashboardComponent {
  // Array que contiene las secciones financieras que se mostrarán en el dashboard
  // Cada objeto representa una sección con un título, una descripción y un ícono (de Font Awesome)
  financialSections = [
    { 
      title: 'Planificación Financiera', // Título de la sección
      description: 'Convierte cada decisión en un paso hacia la estabilidad financiera. ¡Planifica, ahorra y crece!', // Breve descripción motivadora
      icon: 'fas fa-calendar-check' // Icono que representa visualmente la sección
    },
    { 
      title: 'Control de Ingresos y Gastos',
      description: 'Controla tus ingresos y gastos en un solo lugar. ¡Tu futuro financiero empieza hoy!',
      icon: 'fas fa-wallet'
    },
    { 
      title: 'Optimización del Rendimiento',
      description: 'Analiza, ajusta y optimiza tu rendimiento financiero. ¡Toma el control de tus finanzas!',
      icon: 'fas fa-chart-bar'
    },
    { 
      title: 'Ahorro e Inversión',
      description: 'Ahorra con propósito, invierte con inteligencia. ¡Haz que cada peso cuente!',
      icon: 'fas fa-piggy-bank'
    }
  ];
}
