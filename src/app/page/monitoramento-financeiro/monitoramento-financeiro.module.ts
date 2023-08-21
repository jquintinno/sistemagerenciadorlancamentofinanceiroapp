import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  declarations: [MonitoramentoFinanceiroPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonitoramentoFinanceiroPageModule {}
