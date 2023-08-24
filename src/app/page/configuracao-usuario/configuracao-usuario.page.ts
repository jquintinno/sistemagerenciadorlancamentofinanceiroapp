import { Component, OnInit } from '@angular/core';
import { ConfiguracaoUtilityService } from 'src/app/utility/configuracao-utility.service';

@Component({
  selector: 'app-configuracao-usuario',
  templateUrl: './configuracao-usuario.page.html',
  styleUrls: ['./configuracao-usuario.page.scss'],
})
export class ConfiguracaoUsuarioPage implements OnInit {

  constructor(
    public configuracaoUtilityService: ConfiguracaoUtilityService
  ) { }

  ngOnInit() {
  }

}
