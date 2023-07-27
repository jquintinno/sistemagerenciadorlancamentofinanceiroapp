import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.page.html',
  styleUrls: ['./pessoa-cadastrar.page.scss'],
})
export class PessoaCadastrarPage implements OnInit {

  public tipoPessoaList: any[] = [];

  public formulario = new FormGroup({
    tipoPessoa: new FormControl("", [Validators.required]),
    nome: new FormControl("", [Validators.required])
  });

  constructor(
    private toastController: ToastController,
    private router: Router,
    private pessoaService: PessoaService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() { 
    this.recuperarTipoPessoa();
  }

  public create() {
    const pessoa = {
      tipoPessoa: this.formulario.controls["tipoPessoa"].value,
      nome: this.formulario.controls["nome"].value
    };
    this.pessoaService.create(pessoa).subscribe( response => {
      this.limparCamposFormulario(); 
      this.showMensagemSucesso();
      this.redirecionarTelaGerenciadorPessoa();
    }, error => {
      this.showMensagemErro();
    });
  }

  public limparCamposFormulario() {
    this.formulario.reset();
  }

  public isFormularioValido() : Boolean {
    return !this.formulario.valid;
  }

  public async showMensagemSucesso() {
    const toast = await this.toastController.create({
      message: "Pessoa Cadastrada com Sucesso!",
      duration: 2000
    });
    return toast.present();
  }

  public async showMensagemErro() {
    const toast = await this.toastController.create({
      message: "Ocorreu um erro ao tentar salvar os dados da Pessoa!",
      duration: 2000,
      color: 'danger',
      position: "top"
    });
    return toast.present();
  }

  private redirecionarTelaGerenciadorPessoa() {
    setTimeout(() => {
      this.router.navigateByUrl("/pessoa");
    }, 1000);
  }

  private async apresentarCarregamento() {
    const loading = await this.loadingController.create({
      message: "Salvando dados...",
      spinner: "bubbles"
    });
    return loading.present();
  }

  public recuperarTipoPessoa() {
    this.pessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaList = response;
    }, error => {
      this.showMensagemErro();
      this.redirecionarTelaGerenciadorPessoa();
    });
  }

  public async showMensagemErroConexao() {
    const toast = await this.toastController.create({
      message: "Falha na conexão da API!",
      duration: 2000,
      color: 'danger',
      position: "top"
    });
    return toast.present();
  }

}
