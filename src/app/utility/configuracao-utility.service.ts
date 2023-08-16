import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { FormaPagamentoCadastrarModalPage } from '../component/modal/forma-pagamento-cadastrar-modal/forma-pagamento-cadastrar-modal.page';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoUtilityService {

  constructor(
    private router: Router,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  public redirecionarPaginaProdutoServico() {
    this.router.navigate(['/produto-servico']);
  }

  public redirecionarTelaEditar(codigo: number, url: string) {
    this.router.navigate([url, codigo]);
  }

  public redirecionarTelaContaBancaria() {
    this.router.navigate(['/conta-bancaria']);
  }

  public redirecionarTelaContaBancariaCadastrar() {
    this.router.navigate(['/conta-bancaria/conta-bancaria-cadastrar']);
  }

  public redirecionarTelaContaBancariaEditar() {
    this.router.navigate(['/conta-bancaria/conta-bancaria-editar']);
  }

  public redirecionaModalPessoaPesquisar() {
    this.router.navigate(['/pessoa-pesquisar-modal']);
  }

  public redirecionarTelaCadastroLancamentoFinanceiro() {
    this.router.navigate(['/lancamento-financeiro']);
  }

  public redirecionarTelaLancamentoFinanceiroCadastrar() {
    this.router.navigate(['/lancamento-financeiro-cadastrar']);
  }

  public async apresentarToastSucessoMensagem(mensagem: String) {
    const toast = await this.toastController.create({
      message: mensagem.toString(),
      duration: 2000,
      color: "success"
    });
    return await toast.present();
  }

  public async apresentarToastSucessoMensagemDuracao(mensagem: String, duracao: number) {
    const toast = await this.toastController.create({
      message: mensagem.toString(),
      duration: duracao,
      color: "success"
    });
    return await toast.present();
  }

  public async apresentarToastSucessoMensagemPosition(mensagem: String, position: any) {
    const toast = await this.toastController.create({
      message: mensagem.toString(),
      duration: 2000,
      color: "success",
      position: position
    });
    return await toast.present();
  }

  public limparCamposFormulario(formulario: any) {
    formulario.reset();
  }

  public async fecharModal() {
    return await this.modalController.dismiss();
  }

  public async fecharModalParametro(parametro: any) {
    return await this.modalController.dismiss(parametro);
  }

  public async apresentarModalFormaPagamento() { 
    const modal = await this.modalController.create({
      component: FormaPagamentoCadastrarModalPage,
      breakpoints: [0, 0.25, 0.50, 0.60, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.75
    });
    return modal.present();
  }

}
