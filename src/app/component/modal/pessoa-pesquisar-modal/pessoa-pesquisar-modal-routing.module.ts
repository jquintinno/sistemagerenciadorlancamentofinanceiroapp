import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaPesquisarModalPage } from './pessoa-pesquisar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaPesquisarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaPesquisarModalPageRoutingModule {}
