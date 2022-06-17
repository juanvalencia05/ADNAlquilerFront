import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
    if(this.productoForm.valid){
      this.productoServices.guardar(this.productoForm.value).subscribe(()=>window.alert('usuario creado'));
    }
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
