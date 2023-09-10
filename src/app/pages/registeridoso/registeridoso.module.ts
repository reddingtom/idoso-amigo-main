import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteridosoPageRoutingModule } from './registeridoso-routing.module';

import { RegisteridosoPage } from './registeridoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteridosoPageRoutingModule
  ],
  declarations: [RegisteridosoPage]
})
export class RegisteridosoPageModule {}
