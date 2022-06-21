import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlquilerService } from '../../shared/service/alquiler.service';

@Component({
  selector: 'app-eliminar-alquiler',
  templateUrl: './eliminar-alquiler.component.html',
  styleUrls: ['./eliminar-alquiler.component.css']
})
export class EliminarAlquilerComponent implements OnInit {
  alquilerForm:FormGroup;
  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.construirFormularioEliminarAlquiler();
  }

  eliminar(): void
  {
        this.alquilerService.eliminarAlquiler(this.alquilerForm.value).subscribe(()=>{
          //FALTA LA ALERTA
        this.alquilerForm.reset();
      })  
  }

  private construirFormularioEliminarAlquiler() {
    this.alquilerForm = new FormGroup({
      tiempoAlquilado: new FormControl('', [Validators.required]),
      fechaAlquiler:new FormControl('',[Validators.required]),
      fechaDevolucion:new FormControl('',[Validators.required])
    });
  }

}
