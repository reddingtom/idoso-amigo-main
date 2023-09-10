import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistercuidadorPage } from './registercuidador.page';

const routes: Routes = [
  {
    path: '',
    component: RegistercuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistercuidadorPageRoutingModule {}
