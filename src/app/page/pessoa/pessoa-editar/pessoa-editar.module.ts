import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PessoaEditarPageRoutingModule } from './pessoa-editar-routing.module';
import { PessoaEditarPage } from './pessoa-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PessoaEditarPageRoutingModule
  ],
  declarations: [PessoaEditarPage]
})
export class PessoaEditarPageModule {}
