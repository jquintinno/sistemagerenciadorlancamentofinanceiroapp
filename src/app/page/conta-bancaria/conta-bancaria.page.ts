import { Component, OnInit } from '@angular/core';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria',
  templateUrl: './conta-bancaria.page.html',
  styleUrls: ['./conta-bancaria.page.scss'],
})
export class ContaBancariaPage implements OnInit {

  constructor(
    private configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.configuracaoUtilityService.redirecionarTelaContaBancariaEditar();
    }, 1000);
  }

}
