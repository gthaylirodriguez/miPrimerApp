import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-lista-autos-detalle',
  templateUrl: './lista-autos-detalle.component.html',
  styleUrls: ['./lista-autos-detalle.component.css']
})
export class ListaAutosDetalleComponent implements OnInit {

  auto: any;
  isEditable:boolean=false;
  codigoAuto:string= "";
  //formularioAuto: FormGroup;
  constructor(private autoservice: AutoService, private routes:ActivatedRoute, private  formBuilder: FormBuilder) { }

  ngOnInit() {
   /* this.formularioAuto = this.formBuilder.group({
      "marca":[],
      "modelo":[],
      "anio":[],
      "codigo":[],
      "imagenUrl":[]
    }

    )*/
    this.routes.params.subscribe((params:any)=>{
      this.codigoAuto =params['codigo'];
      console.log(this.codigoAuto)
    })
  }

  inicializarFormulario(){

  }
}
