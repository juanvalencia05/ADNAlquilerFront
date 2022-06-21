import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { AlquilerService } from '../../shared/service/alquiler.service';

 import { ListarAlquilerComponent } from './listar-alquiler.component';

 describe('ListarVehiculoComponent', () => {
   let component: ListarAlquilerComponent;
   let fixture: ComponentFixture<ListarAlquilerComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ ListarAlquilerComponent ],
       imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AlquilerService, HttpService]
     })
     .compileComponents();
   });

   beforeEach(() => {
     fixture = TestBed.createComponent(ListarAlquilerComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
