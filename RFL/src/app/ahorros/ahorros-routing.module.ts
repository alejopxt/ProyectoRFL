import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagesA/inicio/inicio.component';
import { AhorrosComponent } from './pagesA/ahorros/ahorros.component';
import { CrearobjetivosComponent } from './pagesA/ahorros/crearobjetivos/crearobjetivos.component';
import { EditarComponent } from './pagesA/ahorros/editar/editar.component';
import { EliminarComponent } from './pagesA/ahorros/eliminar/eliminar.component';



const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ahorros', component: AhorrosComponent},
    {path: 'crearobjetivos', component: CrearobjetivosComponent},
    {path: 'editarobjetivos', component: EditarComponent},
    {path: 'eliminarobjetivos', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhorrosRoutingModule { }