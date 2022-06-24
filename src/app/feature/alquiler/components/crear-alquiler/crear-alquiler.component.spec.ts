import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

import { CrearAlquilerComponent } from './crear-alquiler.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearAlquilerComponent', () => {
  let component: CrearAlquilerComponent;
  let alquilerService: AlquilerService;
  let fixture: ComponentFixture<CrearAlquilerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAlquilerComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AlquilerService, DatePipe, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido, no esta completo', () => {
    component.alquilerForm.controls.tiempoAlquilado.setValue('4');
    component.alquilerForm.controls.fechaAlquiler.setValue('');
    component.alquilerForm.controls.fechaDevolucion.setValue('2022/06/25');
    expect(component.alquilerForm.valid).toBeFalsy();

    component.crear();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('No has diligenciado todos los campos');
    Swal.clickConfirm();
  });

  it('Registrar alquiler con exito', () => {
    TestBed.resetTestingModule();
    component.alquilerForm.controls.tiempoAlquilado.setValue('4');
    component.alquilerForm.controls.fechaAlquiler.setValue('2022/06/21');
    component.alquilerForm.controls.fechaDevolucion.setValue('2022/06/25');

    spyOn(alquilerService, 'crearAlquiler').and.returnValue(
      of(1));

    component.crear();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se creo el alquiler de forma exitosa');
    Swal.clickConfirm();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});

