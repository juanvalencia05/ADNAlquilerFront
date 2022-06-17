import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{AlquilerService} from '../../shared/service/alquiler.service';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {
  alquilerForm:FormGroup;
  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.construirFormularioProducto();
  }

  crear(): void
  {
        this.alquilerService.crearAlquiler(this.alquilerForm.value).subscribe(()=>{
        window.alert('Alquiler Generado')
        this.alquilerForm.reset;
      })  
  }

  private construirFormularioProducto() {
    this.alquilerForm = new FormGroup({
      tiempoAlquiler: new FormControl('', [Validators.required]),
      fechaAlquiler:new FormControl('',[Validators.required]),
      fechaDevolucion:new FormControl('',[Validators.required])
    });
  }

}
