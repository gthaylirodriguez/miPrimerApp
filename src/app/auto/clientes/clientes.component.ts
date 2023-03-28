import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interface/cliente';
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

    listaClientes: any[] = [];

    rows: number = 5;
    pages: number ;
    page: number = 1;

    filtro: string = "";

  ngOnInit() {
    this.formularioCliente = this.formBuilder.group({
      "nombre": [null],
      "apellido":[null],
      "telefono": [null],
      "email": [null]
    });
  }

  
  contacto(){
    this.deseaContacto = !this.deseaContacto;
  }

  consultaClientes(){
    this.clienteServices.getClientes(this.filtro, this.rows, this.page).subscribe((respuesta)=>{
      if(respuesta.codigo == 1){
        this.listaClientes = respuesta.data;
        this.rows = respuesta.rows;
        this.pages = respuesta.pages;
      }
    });
  }

  clearClientes(){
    this.formularioCliente.reset();
  }


  guardarCliente(){
    let cliente:Cliente = {...this.formularioCliente.value};
    this.clienteServices.agregarCliente(cliente).subscribe((respuesta)=>{
      alert(respuesta.mensaje);
      console.log(respuesta);
      if(respuesta.codigo == 1){
        this.clearClientes()
      }
    },
    (errorHttp:HttpErrorResponse) => {
      console.log(errorHttp.error);
      let mensaje = errorHttp.error.mensaje;
      mensaje += errorHttp.error.error?.id ? (' - ' + errorHttp.error.error?.id) : "";
      mensaje += errorHttp.error.error?.nombre ? (' - ' + errorHttp.error.error?.nombre) : "";
      mensaje += errorHttp.error.error?.apellido ? (' - ' + errorHttp.error.error?.apellido) : "";
      mensaje += errorHttp.error.error?.telefono ? (' - ' + errorHttp.error.error?.telefono) : "";
      mensaje += errorHttp.error.error?.email ? (' - ' + errorHttp.error.error?.email) : "";
      alert(mensaje);
    });
  }
}
