import { Component, OnInit } from '@angular/core';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria-cadastrar',
  templateUrl: './conta-bancaria-cadastrar.page.html',
  styleUrls: ['./conta-bancaria-cadastrar.page.scss'],
})
export class ContaBancariaCadastrarPage implements OnInit {

  public cor: any = "blue";

  public bolHabilitarCampo: boolean = false;

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() { }

  public habilitarCampo() : void {
    if (this.bolHabilitarCampo === true) {
      this.bolHabilitarCampo = false;
    } else {
      this.bolHabilitarCampo = true;
    }
  }

}
