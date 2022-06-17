import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { TrmComponent } from './feature/trm/trm.component';
import { AlquilerComponent } from './feature/alquiler/components/alquiler/alquiler.component';
import { EliminarAlquilerComponent } from './feature/alquiler/components/eliminar-alquiler/eliminar-alquiler.component';
import { CrearAlquilerComponent } from './feature/alquiler/components/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './feature/alquiler/components/listar-alquiler/listar-alquiler.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrmComponent,
    AlquilerComponent,
    EliminarAlquilerComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule
      ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
