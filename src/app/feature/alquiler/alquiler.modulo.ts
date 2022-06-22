import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { AlquilerService } from './shared/service/alquiler.service';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { EliminarAlquilerComponent } from './components/eliminar-alquiler/eliminar-alquiler.component';

@NgModule({
    declarations: [   
         ListarAlquilerComponent,
         CrearAlquilerComponent,
         EliminarAlquilerComponent,
         AlquilerComponent
    ],
    imports: [
      CommonModule,
      AlquilerRoutingModule,
      ReactiveFormsModule
    ],
    providers:[AlquilerService]
  })
  export class AlquilerModule {} 
  