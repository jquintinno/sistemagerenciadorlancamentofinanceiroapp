import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentoFinanceiroEditarPage } from './lancamento-financeiro-editar.page';

const routes: Routes = [
  {
    path: '',
    component: LancamentoFinanceiroEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentoFinanceiroEditarPageRoutingModule {}
