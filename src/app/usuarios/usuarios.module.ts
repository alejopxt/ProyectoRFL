// Importaciones necesarias desde Angular y otros módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Proporciona directivas comunes como ngIf y ngFor

// Importamos el módulo de rutas específicas de esta sección
import { UsuariosRoutingModule } from './usuarios-routing.module';

// Importamos los componentes que pertenecen a esta sección
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

// Importamos el módulo compartido donde tenemos componentes reutilizables (navbar, footer, etc.)
import { SharedModule } from '../shared/shared.module';

// Importamos RouterModule por si algún componente necesita navegación
import { RouterModule } from '@angular/router';

// Formularios para manejo de inputs y validaciones (como en login, perfil, etc.)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // Declaramos todos los componentes que pertenecen a este módulo
  declarations: [
    DashboardComponent,
    ForgotPasswordComponent,
    InicioComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],

  // Importamos otros módulos que necesitamos para que estos componentes funcionen correctamente
  imports: [
    CommonModule,               // Para usar ngIf, ngFor, etc.
    UsuariosRoutingModule,      // Importamos las rutas específicas de esta sección
    SharedModule,               // Navbar, footer, u otros elementos compartidos
    RouterModule,               // Navegación entre páginas
    FormsModule,                // Para formularios template-driven
    ReactiveFormsModule         // Para formularios reactivos (usados en login, perfil, etc.)
  ],

  // Exportamos los componentes en caso de que se necesiten usar fuera de este módulo
  exports: [
    DashboardComponent,
    ForgotPasswordComponent,
    InicioComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
})

// Finalmente declaramos el módulo: este archivo organiza todos los componentes y rutas del módulo "usuarios"
export class UsuariosModule { }
