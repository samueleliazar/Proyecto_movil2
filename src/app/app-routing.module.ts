import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'docente',
    loadChildren: () => import('./page/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./page/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./page/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./page/qr/qr-genrated.module').then( m => m.QrGenratedPageModule)
  },  {
    path: 'lista',
    loadChildren: () => import('./page/lista/lista.module').then( m => m.ListaPageModule)
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
