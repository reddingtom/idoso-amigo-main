import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistercuidadorPageRoutingModule } from './registercuidador-routing.module';

import { RegistercuidadorPage } from './registercuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistercuidadorPageRoutingModule
  ],
  declarations: [RegistercuidadorPage]
})
export class RegistercuidadorPageModule {}
