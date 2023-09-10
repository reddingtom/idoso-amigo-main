
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhechatPageRoutingModule } from './detalhechat-routing.module';

import { DetalhechatPage } from './detalhechat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhechatPageRoutingModule
  ],
  declarations: [DetalhechatPage,  ]
})
export class DetalhechatPageModule {}
