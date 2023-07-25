import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PessoaCadastrarPageRoutingModule } from './pessoa-cadastrar-routing.module';
import { PessoaCadastrarPage } from './pessoa-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PessoaCadastrarPageRoutingModule
  ],
  declarations: [PessoaCadastrarPage]
})
export class PessoaCadastrarPageModule {}
