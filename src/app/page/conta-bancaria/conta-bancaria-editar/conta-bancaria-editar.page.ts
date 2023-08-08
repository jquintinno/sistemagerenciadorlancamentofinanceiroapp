import { Component, OnInit } from '@angular/core';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-conta-bancaria-editar',
  templateUrl: './conta-bancaria-editar.page.html',
  styleUrls: ['./conta-bancaria-editar.page.scss'],
})
export class ContaBancariaEditarPage implements OnInit {

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
