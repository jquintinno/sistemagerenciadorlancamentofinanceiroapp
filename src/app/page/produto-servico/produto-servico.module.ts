import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoServicoPageRoutingModule } from './produto-servico-routing.module';

import { ProdutoServicoPage } from './produto-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoServicoPageRoutingModule
  ],
  declarations: [ProdutoServicoPage]
})
export class ProdutoServicoPageModule {}
