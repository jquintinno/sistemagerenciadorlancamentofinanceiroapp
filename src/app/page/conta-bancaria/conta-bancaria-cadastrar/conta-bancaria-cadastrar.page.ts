import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CategoriaContaBancariaPesquisarModalPage } from 'src/app/component/modal/categoria-conta-bancaria-pesquisar-modal/categoria-conta-bancaria-pesquisar-modal.page';
import { PessoaPesquisarModalPage } from 'src/app/component/modal/pessoa-pesquisar-modal/pessoa-pesquisar-modal.page';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria-cadastrar',
  templateUrl: './conta-bancaria-cadastrar.page.html',
  styleUrls: ['./conta-bancaria-cadastrar.page.scss'],
})
export class ContaBancariaCadastrarPage implements OnInit {

  public cor: any = "red";

  public bolHabilitarCampo: boolean = false;

  public nomePessoaContrada: any;

  public nomeCategoriaContaBancaria: any;

  public formGroup = new FormGroup({
    pessoaContrada: new FormControl("", [ Validators.required, Validators.minLength(3), Validators.maxLength(80) ]),
    categoriaContaBancaria: new FormControl("", [ Validators.required, Validators.minLength(3), Validators.maxLength(80) ]),
    numeroContaBancaria: new FormControl("", [ Validators.required, Validators.minLength(6), Validators.maxLength(6) ]),
    agenciaContaBancaria: new FormControl("", [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]),
    saldoInicial: new FormControl("", [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]),
    corContaBancaria: new FormControl("", [ Validators.required, Validators.minLength(7), Validators.maxLength(7) ]),
  });

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public cadastrar() {
    console.log(this.formGroup.value);
    this.formGroup.reset();
    this.nomePessoaContrada = null;
    this.nomeCategoriaContaBancaria = null;
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
        this.formGroup.controls["pessoaContrada"].setValue(parameter.data);
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
        this.formGroup.controls["categoriaContaBancaria"].setValue(parameter.data);
        this.nomeCategoriaContaBancaria = parameter.data.descricao;
        console.log(parameter.data.descricao);
      }
    });
    return await modal.present();
  }

}
