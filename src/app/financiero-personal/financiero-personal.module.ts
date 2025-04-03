import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancieroPersonalRoutingModule } from './financiero-personal-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from "../shared/shared.module";
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { AgregarIngresosComponent } from './pages/ingresos/agregar-ingresos/agregar-ingresos.component';
import { EditarIngresosComponent } from './pages/ingresos/editar-ingresos/editar-ingresos.component';
import { BorrarIngresosComponent } from './pages/ingresos/borrar-ingresos/borrar-ingresos.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { AgregarGastosComponent } from './pages/gastos/agregar-gastos/agregar-gastos.component';
import { EditarGastosComponent } from './pages/gastos/editar-gastos/editar-gastos.component';
import { BorrarGastosComponent } from './pages/gastos/borrar-gastos/borrar-gastos.component';


@NgModule({
  declarations: [
    InicioComponent,
    IngresosComponent,
    AgregarIngresosComponent,
    EditarIngresosComponent,
    BorrarIngresosComponent,
    GastosComponent,
    AgregarGastosComponent,
    EditarGastosComponent,
    BorrarGastosComponent
  ],
  imports: [
    CommonModule,
    FinancieroPersonalRoutingModule,
    SharedModule
],
  exports: [
    InicioComponent,
    IngresosComponent,
    AgregarIngresosComponent,
    EditarIngresosComponent,
    BorrarIngresosComponent,
    GastosComponent,
    AgregarGastosComponent,
    EditarGastosComponent,
    BorrarGastosComponent
  ]
})
export class FinancieroPersonalModule { }
