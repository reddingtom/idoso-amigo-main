import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RetanguloComponent } from 'src/app/componentes/retangulo/retangulo.component';
import { IonicModule } from '@ionic/angular';
import { RetangularComponent } from 'src/app/componentes/retangular/retangular.component';
import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { CirculoComponent } from 'src/app/componentes/circulo/circulo.component';
import { RetComponent } from 'src/app/componentes/ret/ret.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage,
    RetanguloComponent,
    RetangularComponent,
    CirculoComponent,
    RetComponent
  ]
})
export class PrincipalPageModule {}
