import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoServicoEditarPage } from './produto-servico-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoServicoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoServicoEditarPageRoutingModule {}
