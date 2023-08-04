import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conta-bancaria',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
