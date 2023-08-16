import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormaPagamentoCadastrarModalPageRoutingModule } from './forma-pagamento-cadastrar-modal-routing.module';

import { FormaPagamentoCadastrarModalPage } from './forma-pagamento-cadastrar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormaPagamentoCadastrarModalPageRoutingModule
  ],
  declarations: [FormaPagamentoCadastrarModalPage]
})
export class FormaPagamentoCadastrarModalPageModule {}
