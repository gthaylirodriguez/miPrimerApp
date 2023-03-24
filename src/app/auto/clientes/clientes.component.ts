import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteServices: ClienteService, 
    private formBuilder: FormBuilder){ }

    tituloCliente: string = "Registrar Cliente";

    formularioCliente :  FormGroup;
    deseaContacto: boolean = false;

  contacto(){
    this.deseaContacto = !this.deseaContacto;
  }
  ngOnInit() {
    this.formularioCliente = this.formBuilder.group({
      "nombre": [null],
      "apellido":[null],
      "telefono": [null],
      "email": [null]
    });
  }


}
