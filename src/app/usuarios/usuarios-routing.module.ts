// Importamos los módulos necesarios de Angular para trabajar con rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes que se mostrarán al navegar a cada ruta
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

// Definimos las rutas específicas para este módulo (usuarios)
// Cada ruta tiene un 'path' (URL) y un 'component' que se mostrará en esa ruta
const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // Página de bienvenida o inicio
  { path: 'login', component: LoginComponent }, // Página de inicio de sesión
  { path: 'registro', component: RegisterComponent }, // Página de registro de nuevos usuarios
  { path: 'olvide-contrasena', component: ForgotPasswordComponent }, // Página para recuperar contraseña
  { path: 'perfil', component: ProfileComponent }, // Página para ver y editar perfil del usuario
  { path: 'dashboard', component: DashboardComponent }, // Pantalla principal tras iniciar sesión

  // Ruta comodín para redirigir a 'inicio' si la ruta no existe
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

// Decorador @NgModule para declarar el módulo de rutas del módulo de usuarios
@NgModule({
  // Importamos RouterModule configurado con nuestras rutas usando .forChild()
  // Esto indica que son rutas internas del módulo 'Usuarios'
  imports: [RouterModule.forChild(routes)],

  // Exportamos RouterModule para que otros módulos puedan usar esta configuración
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
