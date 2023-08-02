import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoServicoCadastrarPage } from './produto-servico-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoServicoCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoServicoCadastrarPageRoutingModule {}
