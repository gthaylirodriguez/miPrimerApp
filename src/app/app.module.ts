import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './auto/lista-autos/lista-autos.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { PaginacionTablaComponent } from './components/paginacionTabla/paginacionTabla.component';
import { ListaAutosDetalleComponent } from './auto/lista-autos-detalle/lista-autos-detalle.component';

@NgModule({
  declarations: [
    AppComponent, ListaAutosComponent, 
    CalificacionComponent, PaginacionTablaComponent,
    ListaAutosDetalleComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    FormsModule,   FontAwesomeModule,
    CommonModule,   HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
