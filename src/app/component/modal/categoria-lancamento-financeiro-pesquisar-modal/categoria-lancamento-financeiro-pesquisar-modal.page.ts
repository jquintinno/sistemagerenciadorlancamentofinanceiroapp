import { Component, OnInit } from '@angular/core';
import { LancamentoFinanceiroService } from 'src/app/service/lancamento-financeiro.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-categoria-lancamento-financeiro-pesquisar-modal',
  templateUrl: './categoria-lancamento-financeiro-pesquisar-modal.page.html',
  styleUrls: ['./categoria-lancamento-financeiro-pesquisar-modal.page.scss'],
})
export class CategoriaLancamentoFinanceiroPesquisarModalPage implements OnInit {

  public categoriaLancamentoFinanceiroList: any[] = [];

  constructor(
    private lancamentoFinanceiroService: LancamentoFinanceiroService,
    public configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() {
    this.recuperarCategoriaLancamentoFinanceiro();
   }

  public recuperarCategoriaLancamentoFinanceiro() {
    this.lancamentoFinanceiroService.recuperarCategoriaLancamentoFinanceiro().subscribe( response => {
      this.categoriaLancamentoFinanceiroList = response;
    });
  }

  public selecionar(categoriaLancamentoFinanceiro: any) {
    this.configuracaoUtilityService.fecharModalParametro(categoriaLancamentoFinanceiro);
  }

}
