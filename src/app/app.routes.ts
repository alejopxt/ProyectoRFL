import { Routes } from '@angular/router';

// Definición de las rutas principales de la aplicación
export const routes: Routes = [
    // Ruta por defecto: si el usuario accede a la raíz ('/'), será redirigido a 'usuarios/inicio'
    { path: '', redirectTo: 'usuarios/inicio', pathMatch: 'full' }, 

    // Carga el módulo de usuarios de manera dinámica cuando el usuario accede a '/usuarios'
    { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },

    // Carga el módulo de Financiero Laboral de manera dinámica cuando el usuario accede a '/financiero-laboral'
    { path: 'financiero-laboral', loadChildren: () => import('./financiero-laboral/financiero-laboral.module').then(m => m.FinancieroLaboralModule) },

    // Carga el módulo de Financiero Personal cuando el usuario accede a '/financiero-personal'
    { path: 'financiero-personal', loadChildren: () => import('./financiero-personal/financiero-personal.module').then(m => m.FinancieroPersonalModule) },

    // Carga el módulo de Ahorros de manera dinámica cuando el usuario accede a '/ahorros'
    { path: 'ahorros', loadChildren: () => import('./ahorros/ahorros.module').then(m => m.AhorrosModule) },

    // Carga el módulo de Reportes de manera dinámica cuando el usuario accede a '/reportes'
    { path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) },

    // Ruta comodín: si el usuario accede a una ruta no definida, se le redirige a 'usuarios/inicio'
    { path: '**', redirectTo: 'usuarios/inicio' } 
    
];