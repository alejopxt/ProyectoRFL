import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

// Definimos las rutas que estarán disponibles dentro del módulo de usuarios
const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // Ruta para la página de inicio
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'registro', component: RegisterComponent }, // Ruta para la página de registro
  { path: 'olvide-contrasena', component: ForgotPasswordComponent }, // Ruta para la página de recuperación de contraseña
  { path: 'perfil', component: ProfileComponent }, // Ruta para la página de perfil del usuario
  { path: 'dashboard', component: DashboardComponent }, // Ruta para la página principal del usuario

  // Ruta comodín: Si el usuario ingresa una ruta que no existe, será redirigido a la página de inicio
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
