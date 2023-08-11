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

  public pessoaOrdenadaList = [];

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
    
      const sortList = this.pessoaList.sort((a, b) => {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
      });

      let last = null;

      for (let i = 1 ; i < sortList.length; i++ ) {
        const pessoa = sortList[i];
        if (!last || last != pessoa.nome[0]) {
          last = pessoa.nome[0];
          this.pessoaOrdenadaList.push({ key: last, pessoaGrupoList: [] });
        }
        this.pessoaOrdenadaList[this.pessoaOrdenadaList.length - 1].pessoaGrupoList.push(pessoa);
      }
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
