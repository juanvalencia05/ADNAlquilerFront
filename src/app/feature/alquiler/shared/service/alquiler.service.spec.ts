import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { AlquilerService } from './alquiler.service';
import { environment } from 'src/environments/environment.prod';
import { Alquiler } from '../modelo/alquiler';
import { HttpResponse } from '@angular/common/http';

describe('AlquilerService', () => {
  let service: AlquilerService;

  let httpTestingController: HttpTestingController;
  const apiEndpointAlquiler= `${environment.endpoint}/alquiler`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlquilerService, HttpService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AlquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia obtener todos los Alquiler', () => {
    const dummyAlquiler: Alquiler[] =[
      {id:1,tiempoAlquilado:1,fechaAlquiler:'25/06/2022',fechaDevolucion:'26/06/2022'},
      {id:2,tiempoAlquilado:2,fechaAlquiler:'25/06/2022',fechaDevolucion:'27/06/2022'}
    ];

    service.consultar().subscribe(alquiler=>{
      expect(alquiler.length).toBe(1);

    });

    const req =httpTestingController.expectOne(apiEndpointAlquiler);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAlquiler);

  });

  it('deberia crear un Alquiler', () => {
    const dummyAlquiler: Alquiler= {id:1,tiempoAlquilado:1,fechaAlquiler:'25/06/2022',fechaDevolucion:'26/06/2022'};
    service.crearAlquiler(dummyAlquiler).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpTestingController.expectOne(apiEndpointAlquiler);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });
});
