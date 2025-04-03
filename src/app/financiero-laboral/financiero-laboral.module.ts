import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancieroLaboralRoutingModule } from './financiero-laboral-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrincipalComponent
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
