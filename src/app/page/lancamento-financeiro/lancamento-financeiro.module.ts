import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentoFinanceiroPageRoutingModule } from './lancamento-financeiro-routing.module';

import { LancamentoFinanceiroPage } from './lancamento-financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancamentoFinanceiroPageRoutingModule
  ],
  declarations: [LancamentoFinanceiroPage]
})
export class LancamentoFinanceiroPageModule {}
