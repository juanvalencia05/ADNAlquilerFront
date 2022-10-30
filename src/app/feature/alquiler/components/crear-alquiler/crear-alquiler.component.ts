import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Alquiler } from '../../shared/modelo/alquiler';
import { AlquilerService } from '../../shared/service/alquiler.service';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {
  alquilerForm: FormGroup;
  alquiler = new Alquiler();
  constructor(private alquilerService: AlquilerService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.construirFormularioAlquiler();

  }

  crear(): void {
    const fechaAlquiler = this.alquilerForm.get('fechaAlquiler').value;
    const fechaAlquilerDate = fechaAlquiler as Date;
    const formateo = 'dd/MM/yyyy';

    const fechaDevolucion = this.alquilerForm.get('fechaDevolucion').value;
    const fechaDevolucionDate = fechaDevolucion as Date;

    this.alquiler.tiempoAlquilado = this.alquilerForm.get('tiempoAlquilado').value;
    this.alquiler.fechaAlquiler = this.datePipe.transform(fechaAlquilerDate, formateo);
    this.alquiler.fechaDevolucion = this.datePipe.transform(fechaDevolucionDate, formateo);

    if (this.alquilerForm.valid) {

      this.alquilerService.crearAlquiler(this.alquiler).subscribe(() => {
        this.alquilerForm.reset();
        Swal.fire({
          icon: 'success',
          title: 'Se creo el alquiler de forma exitosa',
          timer: 2000
        });
      });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'No has diligenciado todos los campos',
        timer: 2000,
      });
    }
  }

  private construirFormularioAlquiler() {
    this.alquilerForm = new FormGroup({
      tiempoAlquilado: new FormControl('', [Validators.required]),
      fechaAlquiler: new FormControl('', [Validators.required]),
      fechaDevolucion: new FormControl('', [Validators.required])
    });
  }
}
