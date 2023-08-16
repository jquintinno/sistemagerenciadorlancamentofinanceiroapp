import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaLancamentoFinanceiroPesquisarModalPageRoutingModule } from './categoria-lancamento-financeiro-pesquisar-modal-routing.module';

import { CategoriaLancamentoFinanceiroPesquisarModalPage } from './categoria-lancamento-financeiro-pesquisar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaLancamentoFinanceiroPesquisarModalPageRoutingModule
  ],
  declarations: [CategoriaLancamentoFinanceiroPesquisarModalPage]
})
export class CategoriaLancamentoFinanceiroPesquisarModalPageModule {}
