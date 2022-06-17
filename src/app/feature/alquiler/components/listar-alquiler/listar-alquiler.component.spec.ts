import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlquilerComponent } from './listar-alquiler.component';

describe('ListarAlquilerComponent', () => {
  let component: ListarAlquilerComponent;
  let fixture: ComponentFixture<ListarAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAlquilerComponent ]
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
