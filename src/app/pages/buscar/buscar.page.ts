import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  termoDeBusca: string = '';
  resultados: string[] = [];

  buscarItems() {
    this.resultados = [
      'Resultado 1',
      'Resultado 2',
      'Resultado 3',
    ]
  }


  constructor() { }

  ngOnInit() {
  }

}
