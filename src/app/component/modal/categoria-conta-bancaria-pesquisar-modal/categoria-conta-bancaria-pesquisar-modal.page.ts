import { Component, OnInit } from '@angular/core';
import { ContaBancariaService } from 'src/app/service/conta-bancaria.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-categoria-conta-bancaria-pesquisar-modal',
  templateUrl: './categoria-conta-bancaria-pesquisar-modal.page.html',
  styleUrls: ['./categoria-conta-bancaria-pesquisar-modal.page.scss'],
})
export class CategoriaContaBancariaPesquisarModalPage implements OnInit {

  public tipoContaBancariaList: any[] = [];

  public isLoading: boolean = false;

  constructor(
    private contaBancariaService: ContaBancariaService,
    private configuracaoUtilityService: ConfiguracaoUtilityService,
  ) { }

  ngOnInit( ) { 
    this.recuperarTipoContaBancaria();
  }

  public recuperarTipoContaBancaria() {
    this.isLoading = true;
    this.contaBancariaService.searchAllTipoContaBancaria().subscribe( response => {
      this.tipoContaBancariaList = response;
      this.isLoading = false;
    });
  }

  public selecionarTipoContaBancaria(tipoContaBancaria: any) {
    this.configuracaoUtilityService.fecharModalParametro(tipoContaBancaria);
  }

}
