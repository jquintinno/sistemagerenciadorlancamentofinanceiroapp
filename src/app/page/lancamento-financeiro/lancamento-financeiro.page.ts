import { Component, OnInit } from '@angular/core';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-lancamento-financeiro',
  templateUrl: './lancamento-financeiro.page.html',
  styleUrls: ['./lancamento-financeiro.page.scss'],
})
export class LancamentoFinanceiroPage implements OnInit {

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() { }

}
