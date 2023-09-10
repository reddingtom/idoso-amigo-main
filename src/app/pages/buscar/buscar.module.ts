
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { Folder2Component } from 'src/app/componentes/folder2/folder2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule
  ],
  declarations: [BuscarPage,
  Folder2Component
]
})
export class BuscarPageModule {}
