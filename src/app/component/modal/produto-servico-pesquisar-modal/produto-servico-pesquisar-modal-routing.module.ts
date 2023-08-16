import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoServicoPesquisarModalPage } from './produto-servico-pesquisar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoServicoPesquisarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoServicoPesquisarModalPageRoutingModule {}
