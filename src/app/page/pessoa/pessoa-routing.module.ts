import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaPage } from './pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaPage
  },
  {
    path: 'pessoa-cadastrar',
    loadChildren: () => import('./pessoa-cadastrar/pessoa-cadastrar.module').then( m => m.PessoaCadastrarPageModule)
  },
  {
    path: 'pessoa-editar/:codigoPessoa',
    loadChildren: () => import('./pessoa-editar/pessoa-editar.module').then( m => m.PessoaEditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaPageRoutingModule {}
