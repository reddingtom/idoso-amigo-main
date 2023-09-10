import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contactar2PageRoutingModule } from './contactar2-routing.module';

import { Contactar2Page } from './contactar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contactar2PageRoutingModule
  ],
  declarations: [Contactar2Page]
})
export class Contactar2PageModule {}
