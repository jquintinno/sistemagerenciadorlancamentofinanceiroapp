import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.page.html',
  styleUrls: ['./pessoa-cadastrar.page.scss'],
})
export class PessoaCadastrarPage implements OnInit {

  public formulario = new FormGroup({
    codigoTipoPessoa: new FormControl("", [Validators.required]),
    nome: new FormControl("", [Validators.required])
  });

  constructor(
    private toastController: ToastController,
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() { }

  public create() {

    const pessoa = {
      tipoPessoa: Number(this.formulario.controls["codigoTipoPessoa"].value) == 1 ? 'PESSOA_FISICA' : 'PESSOA_JURIDICA',
      nome: this.formulario.controls["nome"].value
    };

    this.pessoaService.create(pessoa).subscribe( response => {
      this.limparCamposFormulario(); 
      this.showMensagemSucesso();
      this.redirecionarTelaGerenciadorPessoa();
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

  private redirecionarTelaGerenciadorPessoa() {
    setTimeout(() => {
      this.router.navigateByUrl("/pessoa");
    }, 3000);
  }

}
