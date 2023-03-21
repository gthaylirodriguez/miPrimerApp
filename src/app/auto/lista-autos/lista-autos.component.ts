import { Component, OnInit } from "@angular/core";
import { AutoService } from "src/app/datos/auto.service";

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})

export class ListaAutosComponent implements OnInit{
    
    constructor(private autoServices: AutoService){}

    tituloListaAutos: string = "Lista de Automóviles"

    listaAutos: any[] = [];
    muestraImagen: boolean = false;
    filtro: string = "";

    rows: number = 5;
    txt: number = 1;
    
    ngOnInit(): void{
        this.listaAutos = this.autoServices.getAutos();
    }

    toggleImage(): void{
        this.muestraImagen = !this.muestraImagen
    }

    mostrarAlert(calificacion:any){
        alert("La calificación es: " + calificacion);
    }

    eliminarAuto(auto: any){

    }

    getListaAutos(){
        this.listaAutos = this.autoServices.filtrarAuto(this.filtro);
        return this.listaAutos;
    }



}