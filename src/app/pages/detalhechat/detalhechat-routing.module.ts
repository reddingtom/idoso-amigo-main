import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhechatPage } from './detalhechat.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhechatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhechatPageRoutingModule {}
