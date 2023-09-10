import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IamPageRoutingModule } from './iam-routing.module';

import { IamPage } from './iam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IamPageRoutingModule
  ],
  declarations: [IamPage]
})
export class IamPageModule {}
