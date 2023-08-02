import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoServicoService } from 'src/app/service/produto-servico.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-produto-servico-cadastrar',
  templateUrl: './produto-servico-cadastrar.page.html',
  styleUrls: ['./produto-servico-cadastrar.page.scss'],
})
export class ProdutoServicoCadastrarPage implements OnInit {

  public fomulario = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    descricao: new FormControl("", [Validators.maxLength(80)])
  });

  constructor(
    private configuracaoUtilityService: ConfiguracaoUtilityService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit() { }

  public createOne() {
    this.produtoServicoService.createOne(this.configurarProdutoServico()).subscribe( response => {
      this.configuracaoUtilityService.apresentarToastSucesso("Produto ou Serviço Cadastrado com Sucesso!");
      this.configuracaoUtilityService.limparCamposFormulario(this.fomulario);
      setTimeout(() => {
        this.configuracaoUtilityService.redirecionarPaginaProdutoServico();
      }, 3000);
    });
  }

  private configurarProdutoServico() : any {
    const produtoServico = {
      nome: this.fomulario.controls["nome"].value,
      descricao: this.fomulario.controls["descricao"].value
    }
    return produtoServico;
  }

}
