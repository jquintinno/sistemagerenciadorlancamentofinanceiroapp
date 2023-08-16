import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormaPagamentoCadastrarModalPage } from './forma-pagamento-cadastrar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FormaPagamentoCadastrarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormaPagamentoCadastrarModalPageRoutingModule {}
