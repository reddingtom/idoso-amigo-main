import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contactar2Page } from './contactar2.page';

const routes: Routes = [
  {
    path: '',
    component: Contactar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contactar2PageRoutingModule {}
