import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaPesquisarModalPageRoutingModule } from './pessoa-pesquisar-modal-routing.module';

import { PessoaPesquisarModalPage } from './pessoa-pesquisar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaPesquisarModalPageRoutingModule
  ],
  declarations: [PessoaPesquisarModalPage]
})
export class PessoaPesquisarModalPageModule {}
