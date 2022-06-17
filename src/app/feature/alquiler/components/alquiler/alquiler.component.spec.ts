import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerComponent } from './alquiler.component';

describe('AlquilerComponent', () => {
  let component: AlquilerComponent;
  let fixture: ComponentFixture<AlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
