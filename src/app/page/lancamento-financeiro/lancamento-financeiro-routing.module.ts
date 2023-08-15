import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentoFinanceiroPage } from './lancamento-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: LancamentoFinanceiroPage
  },
  {
    path: 'lancamento-financeiro-editar',
    loadChildren: () => import('./lancamento-financeiro-editar/lancamento-financeiro-editar.module').then( m => m.LancamentoFinanceiroEditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentoFinanceiroPageRoutingModule {}
