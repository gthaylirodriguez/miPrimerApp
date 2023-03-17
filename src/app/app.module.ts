import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './auto/lista-autos/lista-autos.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { PaginacionTablaComponent } from './components/paginacionTabla/paginacionTabla.component';

@NgModule({
  declarations: [
    AppComponent, ListaAutosComponent, CalificacionComponent, PaginacionTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
