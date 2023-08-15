import { Component, OnInit } from '@angular/core';
import { ContaBancariaService } from 'src/app/service/conta-bancaria.service';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria',
  templateUrl: './conta-bancaria.page.html',
  styleUrls: ['./conta-bancaria.page.scss'],
})
export class ContaBancariaPage implements OnInit {

  public contaBancariaList: any[] = [];

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService,
    private contaBancariaService: ContaBancariaService
  ) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.configuracaoUtilityService.redirecionarTelaContaBancariaCadastrar();
    // }, 1000);
    this.recuperarContaBancaria();
  }

  public recuperarContaBancaria() {
    this.contaBancariaService.recuperarContaBancaria().subscribe( response => {
      this.contaBancariaList = response;
    });
  }

}
