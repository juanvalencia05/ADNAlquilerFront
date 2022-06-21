import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{AlquilerService} from '../../shared/service/alquiler.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {
  alquilerForm:FormGroup;

  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.construirFormularioAlquiler();
  }

  crear(): void
  {
      if(this.alquilerForm.valid)
      {
        this.alquilerService.crearAlquiler(this.alquilerForm.value).subscribe(()=>{
          this.alquilerForm.reset();
      
          Swal.fire({
            icon:'success',
            title:'Se creo el alquiler de forma exitosa',
            timer: 1000,
            showCancelButton: false,
            showConfirmButton: false
          })
  
        })  
      }
      else{
        Swal.fire({
          icon:'error',
          title:'No has diligenciado todos los campos',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
        })
      }

  }

  private construirFormularioAlquiler() {
    this.alquilerForm = new FormGroup({
      tiempoAlquilado: new FormControl('', [Validators.required]),
      fechaAlquiler:new FormControl('',[Validators.required]),
      fechaDevolucion:new FormControl('',[Validators.required])
    });
  }

}
