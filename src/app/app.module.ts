import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ListadoComponent } from './empleados/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    EmpleadoComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
