import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarComponent } from './pages/generar/generar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';

const routes: Routes = [
  {path: "generar", component: GenerarComponent},
  {path: "consultar", component: ConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
