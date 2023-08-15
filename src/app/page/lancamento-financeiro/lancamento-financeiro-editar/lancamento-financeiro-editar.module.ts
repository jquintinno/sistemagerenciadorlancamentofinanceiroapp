import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentoFinanceiroEditarPageRoutingModule } from './lancamento-financeiro-editar-routing.module';

import { LancamentoFinanceiroEditarPage } from './lancamento-financeiro-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancamentoFinanceiroEditarPageRoutingModule
  ],
  declarations: [LancamentoFinanceiroEditarPage]
})
export class LancamentoFinanceiroEditarPageModule {}
