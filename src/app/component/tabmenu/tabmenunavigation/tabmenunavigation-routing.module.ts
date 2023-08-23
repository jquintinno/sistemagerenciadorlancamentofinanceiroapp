import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabmenunavigationPage } from './tabmenunavigation.page';

const routes: Routes = [
  {
    path: '',
    component: TabmenunavigationPage,
    children: [
      {
        path: "",
        redirectTo: "/tabmenunavigation/monitoramento-financeiro",
        pathMatch: "full"
      },
      {
        path: 'monitoramento-financeiro',
        loadChildren: () => import('../../../page/monitoramento-financeiro/monitoramento-financeiro.module').then( m => m.MonitoramentoFinanceiroPageModule)
      },
      {
        path: 'configuracao-usuario',
        loadChildren: () => import('../../../page/configuracao-usuario/configuracao-usuario.module').then( m => m.ConfiguracaoUsuarioPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenunavigationPageRoutingModule {}
