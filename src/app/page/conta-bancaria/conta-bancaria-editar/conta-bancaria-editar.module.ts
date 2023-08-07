import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaBancariaEditarPageRoutingModule } from './conta-bancaria-editar-routing.module';

import { ContaBancariaEditarPage } from './conta-bancaria-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaBancariaEditarPageRoutingModule
  ],
  declarations: [ContaBancariaEditarPage]
})
export class ContaBancariaEditarPageModule {}
