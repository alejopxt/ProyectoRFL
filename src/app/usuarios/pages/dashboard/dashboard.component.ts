import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // Lista de secciones financieras que se mostrarán en el dashboard
  financialSections = [
    { title: 'Planificación Financiera', description: 'Convierte cada decisión en un paso hacia la estabilidad financiera. ¡Planifica, ahorra y crece!', icon: 'fas fa-calendar-check' },
    { title: 'Control de Ingresos y Gastos', description: 'Controla tus ingresos y gastos en un solo lugar. ¡Tu futuro financiero empieza hoy!', icon: 'fas fa-wallet' },
    { title: 'Optimización del Rendimiento', description: 'Analiza, ajusta y optimiza tu rendimiento financiero. ¡Toma el control de tus finanzas!', icon: 'fas fa-chart-bar' },
    { title: 'Ahorro e Inversión', description: 'Ahorra con propósito, invierte con inteligencia. ¡Haz que cada peso cuente!', icon: 'fas fa-piggy-bank' }
  ];

}
