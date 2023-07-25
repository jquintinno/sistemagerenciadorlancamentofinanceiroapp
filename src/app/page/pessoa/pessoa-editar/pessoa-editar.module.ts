import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaEditarPageRoutingModule } from './pessoa-editar-routing.module';

import { PessoaEditarPage } from './pessoa-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaEditarPageRoutingModule
  ],
  declarations: [PessoaEditarPage]
})
export class PessoaEditarPageModule {}
