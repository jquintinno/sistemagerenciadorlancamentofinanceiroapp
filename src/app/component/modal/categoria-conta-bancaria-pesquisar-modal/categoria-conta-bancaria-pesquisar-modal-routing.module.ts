import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaContaBancariaPesquisarModalPage } from './categoria-conta-bancaria-pesquisar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaContaBancariaPesquisarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaContaBancariaPesquisarModalPageRoutingModule {}
