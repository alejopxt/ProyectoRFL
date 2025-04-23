import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancieroLaboralRoutingModule } from './financiero-laboral-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { IngresosComponent } from './ingresos/ingresos.component';
import { AgregarIngresosComponent } from './ingresos/agregar-ingresos/agregar-ingresos.component';
import { EditarIngresosComponent } from './ingresos/editar-ingresos/editar-ingresos.component';
import { EliminarIngresosComponent } from './ingresos/eliminar-ingresos/eliminar-ingresos.component';
import { AgregarGastosComponent } from './gastos/agregar-gastos/agregar-gastos.component';
import { EditarGastosComponent } from './gastos/editar-gastos/editar-gastos.component';
import { EliminarGastosComponent } from './gastos/eliminar-gastos/eliminar-gastos.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    IngresosComponent,
    AgregarIngresosComponent,
    EditarIngresosComponent,
    EliminarIngresosComponent,
    AgregarGastosComponent,
    EditarGastosComponent,
    EliminarGastosComponent
  ],
  imports: [
    CommonModule,
    FinancieroLaboralRoutingModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    SharedModule
  ]
})
export class FinancieroLaboralModule { }
