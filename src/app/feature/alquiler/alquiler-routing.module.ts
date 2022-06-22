import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { EliminarAlquilerComponent } from './components/eliminar-alquiler/eliminar-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';

const routes: Routes = [{
    path: '',
    component: AlquilerComponent,
    children: [
      {
        path: 'crear',
        component: CrearAlquilerComponent
      },
      {
        path: 'listar',
        component: ListarAlquilerComponent
      },
      {
        path: 'eliminar',
        component: EliminarAlquilerComponent
      }
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlquilerRoutingModule{}
  