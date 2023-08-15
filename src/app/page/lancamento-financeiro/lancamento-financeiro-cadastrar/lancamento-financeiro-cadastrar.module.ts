import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentoFinanceiroCadastrarPageRoutingModule } from './lancamento-financeiro-cadastrar-routing.module';

import { LancamentoFinanceiroCadastrarPage } from './lancamento-financeiro-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancamentoFinanceiroCadastrarPageRoutingModule
  ],
  declarations: [LancamentoFinanceiroCadastrarPage]
})
export class LancamentoFinanceiroCadastrarPageModule {}
