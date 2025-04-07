import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarIngresosComponent } from './ingresos/agregar-ingresos/agregar-ingresos.component';
import { EditarIngresosComponent } from './ingresos/editar-ingresos/editar-ingresos.component';
import { EliminarIngresosComponent } from './ingresos/eliminar-ingresos/eliminar-ingresos.component';
import { AgregarGastosComponent } from './gastos/agregar-gastos/agregar-gastos.component';
import { EditarGastosComponent } from './gastos/editar-gastos/editar-gastos.component';
import { EliminarGastosComponent } from './gastos/eliminar-gastos/eliminar-gastos.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'ingresos/agregar', component: AgregarIngresosComponent},
  {path: 'ingresos/editar', component: EditarIngresosComponent},
  {path: 'ingresos/eliminar', component: EliminarIngresosComponent},
  {path: 'gastos/agregar', component: AgregarGastosComponent},
  {path: 'gastos/editar', component: EditarGastosComponent},
  {path: 'gastos/eliminar', component: EliminarGastosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancieroLaboralRoutingModule { }
