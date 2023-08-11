import { Component, OnInit } from '@angular/core';
import { TipoContaBancariaService } from 'src/app/service/tipo-conta-bancaria.service';
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
    private tipoContaBancariaService: TipoContaBancariaService,
    private configuracaoUtilityService: ConfiguracaoUtilityService,
  ) { }

  ngOnInit( ) { 
    this.recuperarTipoContaBancaria();
  }

  public recuperarTipoContaBancaria() {
    this.isLoading = true;
    this.tipoContaBancariaService.searchAll().subscribe( response => {
      this.tipoContaBancariaList = response;
      this.isLoading = false;
    });
  }

  public selecionarTipoContaBancaria(tipoContaBancaria: any) {
    this.configuracaoUtilityService.fecharModalParametro(tipoContaBancaria);
  }

}
