import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoramentoFinanceiroPageRoutingModule } from './monitoramento-financeiro-routing.module';

import { MonitoramentoFinanceiroPage } from './monitoramento-financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoramentoFinanceiroPageRoutingModule
  ],
  declarations: [MonitoramentoFinanceiroPage]
})
export class MonitoramentoFinanceiroPageModule {}
