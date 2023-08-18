import { Component, OnInit } from '@angular/core';
import { ProdutoServicoService } from 'src/app/service/produto-servico.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-produto-servico-pesquisar-modal',
  templateUrl: './produto-servico-pesquisar-modal.page.html',
  styleUrls: ['./produto-servico-pesquisar-modal.page.scss'],
})
export class ProdutoServicoPesquisarModalPage implements OnInit {

  public produtoServicoList = [];

  public nomeProdutoServico: any;

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit() { }

  public verificarProdutoServico(event: any) {
    this.produtoServicoService.recuperarProdutoServico(event.target.value).subscribe( response => {
      this.produtoServicoList = response;
    });
  }

  public selecionarProdutoServico(produtoServico: any) {
    this.nomeProdutoServico = produtoServico.nome;
    this.produtoServicoList = [];
  }

  public limparCampos() {
    this.nomeProdutoServico = null;
  }

}
