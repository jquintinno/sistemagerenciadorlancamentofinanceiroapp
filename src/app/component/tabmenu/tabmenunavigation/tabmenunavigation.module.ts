import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmenunavigationPageRoutingModule } from './tabmenunavigation-routing.module';

import { TabmenunavigationPage } from './tabmenunavigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmenunavigationPageRoutingModule
  ],
  declarations: [TabmenunavigationPage]
})
export class TabmenunavigationPageModule {}
