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
  id :number;

  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.construirFormularioEliminarAlquiler();
  }

  eliminar(): void
  {
        this.id = this.alquilerForm.get('id')?.value;       
        this.alquilerService.eliminarAlquiler(this.id).subscribe(()=>{
          window.alert("se elimino")
          //FALTA LA ALERTA
        this.alquilerForm.reset();
      })  
  }

  private construirFormularioEliminarAlquiler() {
    this.alquilerForm = new FormGroup({
      id: new FormControl('', [Validators.required])
    });
  }

}
