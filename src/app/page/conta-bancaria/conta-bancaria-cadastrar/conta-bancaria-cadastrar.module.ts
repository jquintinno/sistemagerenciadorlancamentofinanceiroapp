import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContaBancariaCadastrarPageRoutingModule } from './conta-bancaria-cadastrar-routing.module';
import { ContaBancariaCadastrarPage } from './conta-bancaria-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContaBancariaCadastrarPageRoutingModule
  ],
  declarations: [ContaBancariaCadastrarPage]
})
export class ContaBancariaCadastrarPageModule {}
