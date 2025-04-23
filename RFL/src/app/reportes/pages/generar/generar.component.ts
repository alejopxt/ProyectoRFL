import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-generar',
  standalone: false,
  templateUrl: './generar.component.html',
  styleUrl: './generar.component.scss'
})
export class GenerarComponent {
  frecuencia = '';
  tipo = '';
  desde = '';
  hasta = '';

  reporteVisible = false;
  datos = [
    { descripcion: "Ingreso mensual", monto: "$5000", fecha: "2025-04-01" },
    { descripcion: "Gasto en alimentos", monto: "$300", fecha: "2025-04-05" }
  ];

  generarReporte() {
    this.reporteVisible = true;
  }

  generarPDF() {
    const element = document.getElementById('reporteGenerado');
    if (element) {
      // @ts-ignore
      html2pdf().from(element).save('reporte_financiero.pdf');
    }
  }
}