import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PessoaPesquisarModalPage } from 'src/app/component/modal/pessoa-pesquisar-modal/pessoa-pesquisar-modal.page';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria-cadastrar',
  templateUrl: './conta-bancaria-cadastrar.page.html',
  styleUrls: ['./conta-bancaria-cadastrar.page.scss'],
})
export class ContaBancariaCadastrarPage implements OnInit {

  public cor: any = "blue";

  public bolHabilitarCampo: boolean = false;

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public habilitarCampo() : void {
    if (this.bolHabilitarCampo === true) {
      this.bolHabilitarCampo = false;
    } else {
      this.bolHabilitarCampo = true;
    }
  }

  public async redirecionarTelaModalPessoa() {
    const modal = await this.modalController.create({
      component: PessoaPesquisarModalPage,
      breakpoints: [0, 0.25, 0.50, 0.60, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.60
    });
    return await modal.present();
  }

}
