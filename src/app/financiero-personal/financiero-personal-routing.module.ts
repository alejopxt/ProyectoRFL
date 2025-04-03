import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { AgregarIngresosComponent } from './pages/ingresos/agregar-ingresos/agregar-ingresos.component';
import { EditarIngresosComponent } from './pages/ingresos/editar-ingresos/editar-ingresos.component';
import { BorrarIngresosComponent } from './pages/ingresos/borrar-ingresos/borrar-ingresos.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { AgregarGastosComponent } from './pages/gastos/agregar-gastos/agregar-gastos.component';
import { EditarGastosComponent } from './pages/gastos/editar-gastos/editar-gastos.component';
import { BorrarGastosComponent } from './pages/gastos/borrar-gastos/borrar-gastos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'ingresos', component: IngresosComponent},
  { path: 'ingresos/agregar', component: AgregarIngresosComponent},
  { path: 'ingresos/editar', component: EditarIngresosComponent},
  { path: 'ingresos/borrar', component: BorrarIngresosComponent},
  { path: 'gastos', component: GastosComponent},
  { path: 'gastos/agregar', component: AgregarGastosComponent},
  { path: 'gastos/editar', component: EditarGastosComponent},
  { path: 'gastos/borrar', component: BorrarGastosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancieroPersonalRoutingModule { }
