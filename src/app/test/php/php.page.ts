import { Component, OnInit } from '@angular/core';
import { ApiphpService } from 'src/app/apiphp.service';

@Component({
  selector: 'app-php',
  templateUrl: './php.page.html',
  styleUrls: ['./php.page.scss'],
})
export class PhpPage implements OnInit {

  tipo: any
  nome: any
  login: any
  password: any
  tel: any
  cpf: any

  constructor(private service: ApiphpService) { }

  ngOnInit() {
  }

  registrar() {

    let data = {
      tipo: 'n importa agr',
      nome: 'ababoi',
      login: 'aaa',
      password: 'senha',
      tel: '123',
      cpf: '456'
    }

    this.service.register(data).subscribe((res: any) => {
      console.log('vc é esperto')
    }, (error: any) => {
      console.log(error)
    })
  }

}
