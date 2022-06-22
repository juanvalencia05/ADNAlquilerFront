import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlquilerService } from '../../shared/service/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-alquiler',
  templateUrl: './eliminar-alquiler.component.html',
  styleUrls: ['./eliminar-alquiler.component.css']
})
export class EliminarAlquilerComponent implements OnInit {
  alquilerForm:FormGroup;
  id :number;

  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.construirFormularioEliminarAlquiler();
  }

  eliminar(): void
  {
        this.id = this.alquilerForm.get('id')?.value;       
        this.alquilerService.eliminarAlquiler(this.id).subscribe(()=>{ 
        this.alquilerForm.reset();

        Swal.fire({
          icon:'success',
          title:'Se Elimino el alquiler de forma exitosa',
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false
        })
      })  
  }

  private construirFormularioEliminarAlquiler() {
    this.alquilerForm = new FormGroup({
      id: new FormControl('', [Validators.required])
    });
  }

}
