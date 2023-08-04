import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaBancariaCadastrarPage } from './conta-bancaria-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: ContaBancariaCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaBancariaCadastrarPageRoutingModule {}
