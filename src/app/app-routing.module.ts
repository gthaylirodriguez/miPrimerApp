import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutosDetalleComponent } from './auto/lista-autos-detalle/lista-autos-detalle.component';
import { ListaAutosComponent } from './auto/lista-autos/lista-autos.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListaAutosComponent
  },
  {
    path: 'lista-autos',
    component: ListaAutosComponent
  },
  {
    path: 'lista-autos/:codigo',
    component: ListaAutosDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
