import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  // Declaramos los componentes que pertenecen a este módulo
  declarations: [
    DashboardComponent,
    ForgotPasswordComponent,
    InicioComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  // Importamos los módulos necesarios para el funcionamiento de este módulo
  imports: [
    CommonModule, // Funcionalidades comunes de Angular
    UsuariosRoutingModule, // Configuración de rutas de este módulo
    SharedModule, // Módulo compartido con componentes reutilizables
    RouterModule, // Habilita la navegación entre componentes
    FormsModule, // Permite trabajar con formularios en Angular
    ReactiveFormsModule // Permite el uso de formularios reactivos en Angular
  ],
  // Exportamos los componentes para que puedan ser utilizados en otros módulos si es necesario
  exports: [
    DashboardComponent,
    ForgotPasswordComponent,
    InicioComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
})
export class UsuariosModule { }
