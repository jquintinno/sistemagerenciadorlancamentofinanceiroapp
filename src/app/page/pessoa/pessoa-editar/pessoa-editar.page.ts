import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.page.html',
  styleUrls: ['./pessoa-editar.page.scss'],
})
export class PessoaEditarPage implements OnInit {

  public codigoPessoa: number = 0;

  public pessoa: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() { 
    this.recuperarPessoa();
  }

  public recuperarPessoa() {
    this.codigoPessoa = this.activatedRoute.snapshot.params["codigoPessoa"];
    console.log(this.codigoPessoa);
    
    this.pessoaService.searchOne(this.codigoPessoa).subscribe( response => {
      console.table(response);
      this.pessoa = response;
    });
  }

}
