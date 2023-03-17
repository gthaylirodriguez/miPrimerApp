import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacionTabla',
  templateUrl: './paginacionTabla.component.html',
  styleUrls: ['./paginacionTabla.component.css']
})
export class PaginacionTablaComponent implements OnInit {

  @Input() rows:number= 10;
  @Input() pages:number = 0;
  @Output() selectPage= new EventEmitter<any>();

  listaPagina: any[] = [];
  
  currentPage: number = 1;
  constructor() { }



  ngOnInit() {
    this.generarPaginacion();
  }


  generarPaginacion(){
    this.listaPagina =[];
    for(let i= 1; i<=this.pages; i++){
      this.listaPagina.push(i);
    }
  }

  _selectPage(page:number){
    this.currentPage = page;
    this.selectPage.emit(page);
  }

  before(){
    if(this.currentPage>1){
      
    }
  }

  after(){

  }


}
