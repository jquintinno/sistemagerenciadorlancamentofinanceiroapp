import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaBancariaEditarPage } from './conta-bancaria-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ContaBancariaEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaBancariaEditarPageRoutingModule {}
