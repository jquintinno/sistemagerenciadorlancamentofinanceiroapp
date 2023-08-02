import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutoServicoCadastrarPageRoutingModule } from './produto-servico-cadastrar-routing.module';
import { ProdutoServicoCadastrarPage } from './produto-servico-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoServicoCadastrarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoServicoCadastrarPage]
})
export class ProdutoServicoCadastrarPageModule {}
