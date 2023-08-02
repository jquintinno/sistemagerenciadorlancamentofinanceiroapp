import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-servico-editar',
  templateUrl: './produto-servico-editar.page.html',
  styleUrls: ['./produto-servico-editar.page.scss'],
})
export class ProdutoServicoEditarPage implements OnInit {

  public codigo: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.recuperarObjeto();
  }

  private recuperarObjeto() {
    this.codigo = this.activatedRoute.snapshot.params["codigo"];
  }

}
