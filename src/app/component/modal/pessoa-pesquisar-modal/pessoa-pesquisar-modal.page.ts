import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/service/pessoa.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-pessoa-pesquisar-modal',
  templateUrl: './pessoa-pesquisar-modal.page.html',
  styleUrls: ['./pessoa-pesquisar-modal.page.scss'],
})
export class PessoaPesquisarModalPage implements OnInit {

  public pessoaList: any[] = [];

  public termoPesquisa: any;

  public isLoading: boolean = false;

  constructor(
    private pessoaService: PessoaService,
    private configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() { 
    this.recuperarPessoaJuridica();
  }

  public async recuperarPessoaJuridica() {
    this.isLoading = true;
    this.pessoaService.searchAll().subscribe(response => {
      this.pessoaList = response;
      this.isLoading = false;
    });
  }

  public recuperarPessoa(event: any) {
    this.pessoaService.searchName(event.target.value).subscribe( response => {
      this.pessoaList = response;
    });
  }

  public selecionarPessoa(pessoa: any) {
    this.configuracaoUtilityService.fecharModalParametro(pessoa); 
  }

}
