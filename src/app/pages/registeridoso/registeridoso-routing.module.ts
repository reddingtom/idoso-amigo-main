import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteridosoPage } from './registeridoso.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteridosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteridosoPageRoutingModule {}
