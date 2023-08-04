import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaBancariaPage } from './conta-bancaria.page';

const routes: Routes = [
  {
    path: '',
    component: ContaBancariaPage
  },
  {
    path: 'conta-bancaria-cadastrar',
    loadChildren: () => import('./conta-bancaria-cadastrar/conta-bancaria-cadastrar.module').then( m => m.ContaBancariaCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaBancariaPageRoutingModule {}
