import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaContaBancariaPesquisarModalPageRoutingModule } from './categoria-conta-bancaria-pesquisar-modal-routing.module';

import { CategoriaContaBancariaPesquisarModalPage } from './categoria-conta-bancaria-pesquisar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaContaBancariaPesquisarModalPageRoutingModule
  ],
  declarations: [CategoriaContaBancariaPesquisarModalPage]
})
export class CategoriaContaBancariaPesquisarModalPageModule {}
