import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { GenerarComponent } from './pages/generar/generar.component';
import { SharedModule } from 'app/shared/shared.module';
import { ConsultarComponent } from './pages/consultar/consultar.component';


@NgModule({
  declarations: [
    GenerarComponent,
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule
  ],
  exports: [
    GenerarComponent,
    ConsultarComponent
  ]
})
export class ReportesModule { }
