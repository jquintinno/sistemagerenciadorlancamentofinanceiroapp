import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoramentoFinanceiroPage } from './monitoramento-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoramentoFinanceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoramentoFinanceiroPageRoutingModule {}
