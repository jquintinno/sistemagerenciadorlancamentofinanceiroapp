import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoServicoPage } from './produto-servico.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoServicoPage
  },
  {
    path: 'produto-servico-cadastrar',
    loadChildren: () => import('./produto-servico-cadastrar/produto-servico-cadastrar.module').then( m => m.ProdutoServicoCadastrarPageModule)
  },
  {
    path: 'produto-servico-editar/:codigo',
    loadChildren: () => import('./produto-servico-editar/produto-servico-editar.module').then( m => m.ProdutoServicoEditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoServicoPageRoutingModule {}
