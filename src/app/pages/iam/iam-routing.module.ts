import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IamPage } from './iam.page';

const routes: Routes = [
  {
    path: '',
    component: IamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IamPageRoutingModule {}
