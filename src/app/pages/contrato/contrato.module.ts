import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratoPageRoutingModule } from './contrato-routing.module';

import { ContratoPage } from './contrato.page';
import { AlertComponent } from 'src/app/componentes/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoPageRoutingModule
  ],
  declarations: [ContratoPage,
  AlertComponent]
})
export class ContratoPageModule {}
