import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentoFinanceiroCadastrarPage } from './lancamento-financeiro-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: LancamentoFinanceiroCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentoFinanceiroCadastrarPageRoutingModule {}
