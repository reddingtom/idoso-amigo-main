import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LembretePageRoutingModule } from './lembrete-routing.module';

import { LembretePage } from './lembrete.page';
import { Folter3Component } from 'src/app/componentes/folter3/folter3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LembretePageRoutingModule
  ],
  declarations: [LembretePage,
  Folter3Component]
})
export class LembretePageModule {}
