import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoServicoPesquisarModalPageRoutingModule } from './produto-servico-pesquisar-modal-routing.module';

import { ProdutoServicoPesquisarModalPage } from './produto-servico-pesquisar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoServicoPesquisarModalPageRoutingModule
  ],
  declarations: [ProdutoServicoPesquisarModalPage]
})
export class ProdutoServicoPesquisarModalPageModule {}
