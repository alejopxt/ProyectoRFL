// Importamos la interfaz Routes desde Angular para definir rutas de navegación
import { Routes } from '@angular/router';

// Aquí definimos las rutas principales de la aplicación
export const routes: Routes = [

  // Ruta por defecto: cuando se accede a la raíz (''), redirige a 'usuarios/inicio'
  // 'pathMatch: full' asegura que solo se redirija si la URL es exactamente vacía
  { path: '', redirectTo: 'usuarios/inicio', pathMatch: 'full' }, 

  // Ruta que carga de forma perezosa (lazy load) el módulo de 'usuarios'
  // Esto mejora el rendimiento porque solo se carga este módulo cuando se accede a la ruta
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },

  // Ruta para el módulo de Finanzas Laborales (también lazy loaded)
  { path: 'financiero-laboral', loadChildren: () => import('./financiero-laboral/financiero-laboral.module').then(m => m.FinancieroLaboralModule) },

  // Ruta para el módulo de Finanzas Personales
  { path: 'financiero-personal', loadChildren: () => import('./financiero-personal/financiero-personal.module').then(m => m.FinancieroPersonalModule) },

  // Ruta para el módulo de Ahorros
  { path: 'ahorros', loadChildren: () => import('./ahorros/ahorros.module').then(m => m.AhorrosModule) },

  // Ruta para el módulo de Reportes
  { path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) },

  // Ruta comodín (**) para manejar rutas no existentes
  // Redirige cualquier ruta desconocida a 'usuarios/inicio'
  { path: '**', redirectTo: 'usuarios/inicio' } 
];
