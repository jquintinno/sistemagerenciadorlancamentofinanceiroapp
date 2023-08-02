import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoServicoEditarPageRoutingModule } from './produto-servico-editar-routing.module';

import { ProdutoServicoEditarPage } from './produto-servico-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoServicoEditarPageRoutingModule
  ],
  declarations: [ProdutoServicoEditarPage]
})
export class ProdutoServicoEditarPageModule {}
