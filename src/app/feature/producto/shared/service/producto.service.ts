import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet(`${environment.endpoint}/users`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pipe(map((response: any) => response.data as Producto[]));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/users`, producto);
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/users/${producto.id}`);
  }
}
