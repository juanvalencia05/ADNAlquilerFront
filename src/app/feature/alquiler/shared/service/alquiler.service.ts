import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Alquiler } from '../modelo/alquiler';
import { AlquilerResumen } from '../modelo/alquilerResumenDto';

@Injectable()
export class AlquilerService {

  constructor(private httpService: HttpService) { }


  public consultar(): Observable<AlquilerResumen[]> {
    return this.httpService.doGet<AlquilerResumen[]>(`${environment.endpoint}/alquiler`);
  }

  public crearAlquiler(alquiler: Alquiler): Observable<number> {

    return this.httpService.doPost<Alquiler, number>(`${environment.endpoint}/alquiler`, alquiler);
  }

  public eliminarAlquiler(id: number): Observable<number> {
    return this.httpService.doDelete(`${environment.endpoint}/alquiler/${id}`);
  }
}
