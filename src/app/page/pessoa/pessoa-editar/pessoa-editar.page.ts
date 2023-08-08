import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.page.html',
  styleUrls: ['./pessoa-editar.page.scss'],
})
export class PessoaEditarPage implements OnInit {

  public codigoPessoa: number = 0;

  public pessoa: any;

  public tipoPessoaList: any[] = [];

  public formulario = new FormGroup({
    codigoTipoPessoa: new FormControl("", [Validators.required]),
    nome: new FormControl("", [Validators.required])
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService,
    private toastController: ToastController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() { 
    this.recuperarPessoa();
    this.recuperarTipoPessoa();
  }

  public update() {
    this.pessoa.codigo = this.codigoPessoa;
    this.pessoa.tipoPessoa = this.formulario.controls["codigoTipoPessoa"].value;
    this.pessoa.nome = this.formulario.controls["nome"].value;
    this.tipoPessoaList.forEach( item => {
      if (item.codigo === this.pessoa.tipoPessoa) {
        this.pessoa.tipoPessoa = item;
      }
    });

    this.pessoaService.updateOne(this.pessoa).subscribe( response => {
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
      message: "Dados atualizados com Sucesso!",
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

  public recuperarPessoa() {
    this.codigoPessoa = this.activatedRoute.snapshot.params["codigoPessoa"];
    this.pessoaService.searchCode(this.codigoPessoa).subscribe( response => {
      this.pessoa = response;
      this.formulario.controls["codigoTipoPessoa"].setValue(this.pessoa.tipoPessoa.codigo);
      this.formulario.controls["nome"].setValue(this.pessoa.nome);
    });
  }

  public recuperarTipoPessoa() {
    this.pessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaList = response;
    });
  }

}
