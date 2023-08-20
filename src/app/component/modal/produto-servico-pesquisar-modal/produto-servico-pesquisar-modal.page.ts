import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public isHabilitarCampoDescricao: boolean = false;

  public formGroup = new FormGroup({
    produtoServicoModel: new FormControl("", [ Validators.required ]),
    descricaoProdutoServico: new FormControl("", [ Validators.required ]),
    valorProdutoServico: new FormControl("", [ Validators.required ]),
  });

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit() { }

  public recuperarProdutoServico(event: any) {
    this.produtoServicoService.recuperarProdutoServico(event.target.value).subscribe( response => {
      this.produtoServicoList = response;
    });
  }

  public selecionarProdutoServico(produtoServico: any) {
    this.nomeProdutoServico = produtoServico.nome;
    this.formGroup.controls["produtoServicoModel"].setValue(produtoServico);
    this.isHabilitarCampoDescricao = true;
    this.produtoServicoList = [];
  }

  public limparCampos() {
    this.nomeProdutoServico = null;
    this.formGroup.controls["produtoServicoModel"].setValue(null);
  }

  public salvarProdutoServico() {

    let produtoServicoDomain: any = {};

    const object: any = {
      produtoServicoModel: this.formGroup.controls['produtoServicoModel'].value,
      valor: this.formGroup.controls['valorProdutoServico'].value
    };

    if (object.produtoServicoModel instanceof Object) {
      produtoServicoDomain = object.produtoServicoModel;
    } else {
      produtoServicoDomain = {
        nome: this.formGroup.controls['produtoServicoModel'].value,
        descricao: this.formGroup.controls['descricaoProdutoServico'].value,
        valor: this.formGroup.controls['valorProdutoServico'].value,
      }
    }

    this.configuracaoUtilityService.fecharModalParametro(produtoServicoDomain);

    // this.produtoServicoService.createOne(produtoServicoDomain).subscribe( response => {
    //   console.log(response);
    // }, error => {
    //   console.log(error);
    // });

  }

}
