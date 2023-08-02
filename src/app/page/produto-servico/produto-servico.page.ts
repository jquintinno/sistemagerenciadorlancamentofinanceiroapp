import { Component, OnInit } from '@angular/core';
import { ProdutoServicoService } from 'src/app/service/produto-servico.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-produto-servico',
  templateUrl: './produto-servico.page.html',
  styleUrls: ['./produto-servico.page.scss'],
})
export class ProdutoServicoPage implements OnInit {

  public produtoServicoList: any[] = [];

  constructor(
    private configuracaoUtilityService: ConfiguracaoUtilityService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit() { 
    this.searchAll();
  }

  public searchAll() {
    this.produtoServicoService.searchOne().subscribe( response => {
      this.produtoServicoList = response;
    });
  }

  public redirecionarTelaEditar(codigo: number) {
    this.configuracaoUtilityService.redirecionarTelaEditar(codigo, '/produto-servico/produto-servico-editar');
  }

}
