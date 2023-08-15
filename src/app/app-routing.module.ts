import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lancamento-financeiro',
    pathMatch: 'full'
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./page/pessoa/pessoa.module').then( m => m.PessoaPageModule)
  },
  {
    path: 'produto-servico',
    loadChildren: () => import('./page/produto-servico/produto-servico.module').then( m => m.ProdutoServicoPageModule)
  },
  {
    path: 'conta-bancaria',
    loadChildren: () => import('./page/conta-bancaria/conta-bancaria.module').then( m => m.ContaBancariaPageModule)
  },
  {
    path: 'pessoa-pesquisar-modal',
    loadChildren: () => import('./component/modal/pessoa-pesquisar-modal/pessoa-pesquisar-modal.module').then( m => m.PessoaPesquisarModalPageModule)
  },
  {
    path: 'categoria-conta-bancaria-pesquisar-modal',
    loadChildren: () => import('./component/modal/categoria-conta-bancaria-pesquisar-modal/categoria-conta-bancaria-pesquisar-modal.module').then( m => m.CategoriaContaBancariaPesquisarModalPageModule)
  },
  {
    path: 'lancamento-financeiro-cadastrar',
    loadChildren: () => import('./page/lancamento-financeiro/lancamento-financeiro-cadastrar/lancamento-financeiro-cadastrar.module').then( m => m.LancamentoFinanceiroCadastrarPageModule)
  },
  {
    path: 'lancamento-financeiro',
    loadChildren: () => import('./page/lancamento-financeiro/lancamento-financeiro.module').then( m => m.LancamentoFinanceiroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
