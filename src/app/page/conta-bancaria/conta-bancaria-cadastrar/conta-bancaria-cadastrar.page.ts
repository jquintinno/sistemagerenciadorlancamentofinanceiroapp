import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CategoriaContaBancariaPesquisarModalPage } from 'src/app/component/modal/categoria-conta-bancaria-pesquisar-modal/categoria-conta-bancaria-pesquisar-modal.page';
import { PessoaPesquisarModalPage } from 'src/app/component/modal/pessoa-pesquisar-modal/pessoa-pesquisar-modal.page';
import { ContaBancariaService } from 'src/app/service/conta-bancaria.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria-cadastrar',
  templateUrl: './conta-bancaria-cadastrar.page.html',
  styleUrls: ['./conta-bancaria-cadastrar.page.scss'],
})
export class ContaBancariaCadastrarPage implements OnInit {

  public cor: any = "green";

  public bolHabilitarCampo: boolean = false;

  public nomePessoaContrada: any;

  public nomeCategoriaContaBancaria: any;

  public saldoInicial: number = 0;

  public formGroup = new FormGroup({
    codigoPessoaContrada: new FormControl("", [ Validators.required ]),
    codigoCategoriaContaBancaria: new FormControl("", [ Validators.required ]),
    numeroContaBancaria: new FormControl("", [ Validators.required ]),
    numeroAgenciaContaBancaria: new FormControl("", [ Validators.required ]),
    saldoInicial: new FormControl("", [ Validators.required, Validators.minLength(1) ]),
    corContaBancaria: new FormControl(""),
  });

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private modalController: ModalController,
    private contaBancariaService: ContaBancariaService
  ) { }

  ngOnInit() { }

  public cadastrar() {
    if (this.formGroup.valid) {
      const contaBancariaModel = {
        codigoPessoaContrada: this.formGroup.controls['codigoPessoaContrada'].value,
        codigoCategoriaContaBancaria: this.formGroup.controls['codigoCategoriaContaBancaria'].value,
        numeroContaBancaria: this.formGroup.controls['numeroContaBancaria'].value,
        numeroAgenciaContaBancaria: this.formGroup.controls['numeroAgenciaContaBancaria'].value,
        saldoInicial: this.formGroup.controls['saldoInicial'].value,
        // corContaBancaria: this.formGroup.controls['corContaBancaria'].value,
        corContaBancaria: "red",
      }
      this.contaBancariaService.cadastrarContaBancaria(contaBancariaModel).subscribe( response => {
      this.formGroup.reset();
      this.nomePessoaContrada = null;
      this.nomeCategoriaContaBancaria = null;
      this.saldoInicial = 0;
      this.configuracaoUtilityService.apresentarToastSucessoMensagemPosition("Conta Bancária Cadastrada com Sucesso!", "bottom");
      this.configuracaoUtilityService.redirecionarTelaContaBancaria();
      });
    }
  }

  public exibirSaldoInicial() {
    this.saldoInicial = Number(this.formGroup.controls['saldoInicial'].value) != 0 ? 
      Number(this.formGroup.controls['saldoInicial'].value) :
      Number(0);
  }

  public onChangeMaxLength(event: any, propriedade: string, tamanhoMaximo: number) {
    if (event.target.value.toString().length > tamanhoMaximo) {
      this.formGroup.controls[propriedade].setValue(event.target.value.slice(0, tamanhoMaximo));
    }
  }

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
      initialBreakpoint: 1
    });
    modal.onDidDismiss().then( (parameter) => {
      if (parameter.role !== 'backdrop') {
        this.formGroup.controls["codigoPessoaContrada"].setValue(parameter.data.codigo);
        this.nomePessoaContrada = parameter.data.nome;
      }
    });
    return await modal.present();
  }

  public async redirecionarTelaModalCategoriaContaBancaria() {
    const modal = await this.modalController.create({
      component: CategoriaContaBancariaPesquisarModalPage,
      breakpoints: [0, 0.25, 0.50, 0.60, 0.65, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.65
    });
    modal.onDidDismiss().then( (parameter) => {
      if (parameter.role !== 'backdrop') {
        this.formGroup.controls["codigoCategoriaContaBancaria"].setValue(parameter.data.codigo);
        this.nomeCategoriaContaBancaria = parameter.data.descricao;
      }
    });
    return await modal.present();
  }

}
