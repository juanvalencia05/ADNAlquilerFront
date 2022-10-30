import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { AlquilerService } from '../../shared/service/alquiler.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { EliminarAlquilerComponent } from './eliminar-alquiler.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EliminarAsistenciaComponent', () => {
  let component: EliminarAlquilerComponent;
  let alquilerService: AlquilerService;
  let fixture: ComponentFixture<EliminarAlquilerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarAlquilerComponent],
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
    fixture = TestBed.createComponent(EliminarAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('No eliminar, campos faltantes', () => {
    component.alquilerForm.controls.id.setValue('');

    component.eliminar();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('No se agrego el id');
    expect(Swal.getIcon().textContent).toBeTruthy();
    Swal.clickConfirm();

  });

  it('Eliminar alquiler', () => {
    TestBed.resetTestingModule();
    component.alquilerForm.controls.id.setValue(1);


    spyOn(alquilerService, 'eliminarAlquiler').and.returnValue(
      of(component.alquilerForm.value)
    );

    component.eliminar();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se Elimino el alquiler de forma exitosa');
    expect(Swal.getIcon().textContent).toBeTruthy();
    Swal.clickConfirm();

  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});
