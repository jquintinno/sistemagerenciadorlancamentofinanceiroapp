import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaBancariaCadastrarPageRoutingModule } from './conta-bancaria-cadastrar-routing.module';

import { ContaBancariaCadastrarPage } from './conta-bancaria-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaBancariaCadastrarPageRoutingModule
  ],
  declarations: [ContaBancariaCadastrarPage]
})
export class ContaBancariaCadastrarPageModule {}
