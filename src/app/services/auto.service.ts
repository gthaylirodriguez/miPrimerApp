import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Auto } from '../interface/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

constructor(private http: HttpClient) { }
baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

getAutos(filtro?:string, rows?:number, page?:number){
  let body = new HttpParams();
  body = filtro ? body.set('filtro',filtro) : body;
  body = rows ? body.set('rows',rows) : body;
  body = page ? body.set('page',page) : body;
  return this.http.get<any>(this.baseUrl+"vehiculos/", {params:body});
}

eliminarAuto(codigo:string){
  return this.http.delete<any>(this.baseUrl+'vehiculo/'+codigo);
  /*let index = this.listaAutos.findIndex((item) => item.codigo === codigo);
  this.listaAutos.splice(index, 1);*/
}

agregarAuto(auto:Auto){
  let body = this.getParamsAuto(auto);
  return this.http.post<any>(this.baseUrl+'vehiculo/', body);
}

actualizarAuto(auto:Auto, codigo:string){
  let body = this.getParamsAuto(auto);
  return this.http.put<any>(this.baseUrl+'vehiculo/' + codigo, body);
}

getAuto(codigo:string){
  return this.http.get<any>(this.baseUrl + "vehiculo/" + codigo);
}

filtrarAuto(filtro: string){
  if (filtro ==""){
    return this.listaAutos;
  }
  let lista= this.listaAutos.filter((item)=> 
    item.codigo.includes(filtro.toUpperCase()) || item.modelo.includes(filtro.toUpperCase()) || item.marca.includes(filtro.toUpperCase()) 
  )
  return lista;
}

getParamsAuto(auto:Auto){
  let body = new HttpParams();
  body = auto.codigo ? body.set('codigo',auto.codigo) : body;
  body = auto.marca ? body.set('marca',auto.marca) : body;
  body = auto.modelo ? body.set('modelo',auto.modelo) : body;
  body = auto.anio ? body.set('anio',auto.anio) : body;
  body = auto.calificacion ? body.set('calificacion',auto.calificacion) : body;
  body = auto.imagenUrl ? body.set('foto',auto.imagenUrl) : body;
  return body;
}

private listaAutos: any[] = [
  {"codigo":"001", "marca":"CHEVROLET", "modelo":"SAIL 1.5", "anio":"2023", "imagenUrl":"https://tuautoencasa.com/img/galeria/1619475914.jpg", "calificacion": 5},
        {"codigo":"002", "marca":"CHEVROLET", "modelo":"ONIX", "anio":"2023", "imagenUrl":"https://img.remediosdigitales.com/858e8a/chevrolet-onix-2023-precio-mexico_/840_560.jpg", "calificacion": 3},
        {"codigo":"003", "marca":"NISSAN", "modelo":"Sentra", "anio":"2023", "imagenUrl":"https://www.ccarprice.com/products/Nissan_Sentra_S_2022_1.jpg", "calificacion": 4},
        {"codigo":"004", "marca":"TOYOTA", "modelo":"Corolla", "anio":"2023", "imagenUrl":"https://mma.prnewswire.com/media/1923543/2023_Corolla_Sedan_001H.jpg", "calificacion": 4},
        {"codigo":"005", "marca":"HIUNDAY", "modelo":"Electra", "anio":"2021", "imagenUrl":"https://media.primicias.ec/2021/08/03140218/port-1.jpg", "calificacion": 4},
        {"codigo":"006", "marca":"NISSAN", "modelo":"Versa", "anio":"2023", "imagenUrl":"https://www.nissan-cdn.net/content/dam/Nissan/ec/vehicles/Versa_MY20/launch/especificaciones/advance-cvt-spec.png.ximg.l_3_m.smart.png", "calificacion": 4}
]

}
