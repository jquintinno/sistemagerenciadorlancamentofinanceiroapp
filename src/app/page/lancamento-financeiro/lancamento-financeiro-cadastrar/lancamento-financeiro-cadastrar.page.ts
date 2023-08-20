import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriaLancamentoFinanceiroPesquisarModalPage } from 'src/app/component/modal/categoria-lancamento-financeiro-pesquisar-modal/categoria-lancamento-financeiro-pesquisar-modal.page';
import { PessoaPesquisarModalPage } from 'src/app/component/modal/pessoa-pesquisar-modal/pessoa-pesquisar-modal.page';
import { ProdutoServicoPesquisarModalPage } from 'src/app/component/modal/produto-servico-pesquisar-modal/produto-servico-pesquisar-modal.page';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-lancamento-financeiro-cadastrar',
  templateUrl: './lancamento-financeiro-cadastrar.page.html',
  styleUrls: ['./lancamento-financeiro-cadastrar.page.scss'],
})
export class LancamentoFinanceiroCadastrarPage implements OnInit {

  public nomePessoaLancamentoFinanceiro: string;
  public nomeCategoriaLancamentoFinanceiro: string;
  public nomeProdutoServico: string;

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private modalController: ModalController
  ) { }

  ngOnInit() { 
    this.nomePessoaLancamentoFinanceiro = null;
    this.nomeCategoriaLancamentoFinanceiro = null;
  }

  public async apresentarModalCadastroPessoaLancamentoFinanceiro() {
    const modal = await this.modalController.create({
      component: PessoaPesquisarModalPage,
      breakpoints: [0, 0.25, 0.50, 0.60, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 1
    });
    modal.onDidDismiss().then( (parameter) => {
      if (parameter.role !== 'backdrop') {
        this.nomePessoaLancamentoFinanceiro = parameter.data?.nome;
      }
    });
    return modal.present();
  }

  public async apresentarModalCategoriaLancamentoFinanceiro() { 
    const modal = await this.modalController.create({
      component: CategoriaLancamentoFinanceiroPesquisarModalPage,
      breakpoints: [0, 0.25, 0.50, 0.60, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.75
    });
    modal.onDidDismiss().then( (parameter) => {
      if (parameter.role !== 'backdrop') {
        this.nomeCategoriaLancamentoFinanceiro = parameter.data.nome;
      }
    });
    return modal.present();
  }

  public async apresentarModalProdutoServico() { 
    const modal = await this.modalController.create({
      component: ProdutoServicoPesquisarModalPage,
      breakpoints: [0, 0.25, 0.50, 0.60, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.50
    });
    modal.onDidDismiss().then( (parameter) => {
      if (parameter.role !== 'backdrop') {
        this.nomeProdutoServico = parameter.data.nome;
      }
    });
    return modal.present();
  }

}
