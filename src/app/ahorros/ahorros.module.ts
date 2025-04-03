import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorrosRoutingModule } from './ahorros-routing.module';
import { InicioComponent } from './pagesA/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { AhorrosComponent } from './pagesA/ahorros/ahorros.component';
import { CrearobjetivosComponent } from './pagesA/ahorros/crearobjetivos/crearobjetivos.component';
import { EditarComponent } from './pagesA/ahorros/editar/editar.component';
import { EliminarComponent } from './pagesA/ahorros/eliminar/eliminar.component';


@NgModule({
  declarations: [
    InicioComponent,
    AhorrosComponent,
    CrearobjetivosComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    AhorrosRoutingModule,
    SharedModule
],
  exports: [
    InicioComponent,
    AhorrosComponent,
    CrearobjetivosComponent,
    EditarComponent,
    EliminarComponent
  ]
})
export class AhorrosModule {}