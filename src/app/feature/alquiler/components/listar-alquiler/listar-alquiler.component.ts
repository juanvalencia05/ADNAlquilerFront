import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlquilerResumen } from '../../shared/modelo/alquilerResumenDto';
import { AlquilerService } from '../../shared/service/alquiler.service';

@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',
  styleUrls: ['./listar-alquiler.component.css']
})
export class ListarAlquilerComponent implements OnInit {

  public listaAlquiler:Observable<AlquilerResumen[]>;

  constructor(protected alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.listaAlquiler = this.alquilerService.consultar();
  }

}
