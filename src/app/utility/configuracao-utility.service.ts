import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoUtilityService {

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  public redirecionarPaginaProdutoServico() {
    this.router.navigate(['/produto-servico']);
  }

  public redirecionarTelaEditar(codigo: number, url: string) {
    this.router.navigate([url, codigo]);
  }

  public async apresentarToastSucesso(mensagem: String) {
    const toast = await this.toastController.create({
      message: mensagem.toString(),
      duration: 2000,
      color: "success"
    });
    return await toast.present();
  }

  public limparCamposFormulario(formulario: any) {
    formulario.reset();
  }

}
