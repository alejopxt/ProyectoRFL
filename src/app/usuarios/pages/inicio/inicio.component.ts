import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  // Arreglo que contiene las características (features) que se mostrarán en la interfaz
  features = [
    { icon: 'fas fa-wallet', title: 'Gestión de Ingresos y Gastos', description: 'Controla cada entrada y salida de dinero fácilmente.' },
    { icon: 'fas fa-chart-line', title: 'Análisis de Rendimiento', description: 'Evalúa tu desempeño financiero con gráficos detallados.' },
    { icon: 'fas fa-piggy-bank', title: 'Planificación de Ahorro', description: 'Establece metas de ahorro y cúmplelas con estrategias efectivas.' },
    { icon: 'fas fa-file-alt', title: 'Informes Detallados', description: 'Obtén reportes personalizados para mejores decisiones.' }
  ];

}

