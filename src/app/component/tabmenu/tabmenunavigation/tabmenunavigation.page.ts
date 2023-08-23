import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabmenunavigation',
  templateUrl: './tabmenunavigation.page.html',
  styleUrls: ['./tabmenunavigation.page.scss'],
})
export class TabmenunavigationPage implements OnInit {

  @ViewChild("tabMenuNavigation")
  public tabMenuNavigation: IonTabs;

  public tabMenuNavigationSelecionado: any;

  constructor() { }

  ngOnInit() { }

  public onChangeVerificarTabMenuSelecionado() {
    this.tabMenuNavigationSelecionado = this.tabMenuNavigation.getSelected();
  }

}
