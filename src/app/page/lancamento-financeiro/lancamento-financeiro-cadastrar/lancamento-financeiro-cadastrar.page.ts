import { Component, OnInit } from '@angular/core';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-lancamento-financeiro-cadastrar',
  templateUrl: './lancamento-financeiro-cadastrar.page.html',
  styleUrls: ['./lancamento-financeiro-cadastrar.page.scss'],
})
export class LancamentoFinanceiroCadastrarPage implements OnInit {

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() { }

}
