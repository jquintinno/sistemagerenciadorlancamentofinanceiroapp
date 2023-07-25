import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  public pessoaList: any[] = [];

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { 
    this.searchAll();
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.searchAll();
}

  public searchAll() {
    this.pessoaService.searchAll().subscribe( response => {
      this.pessoaList = response;
      this.pessoaList.forEach( item => {
        if (item.tipoPessoaEnumeration === "PESSOA_FISICA") {
          item.tipoPessoaEnumeration = "Pessoa Física";
        } else {
          item.tipoPessoaEnumeration = "Pessoa Jurídica";
        }
      });
    });
  }

  public redirecionarTelaPessoaEditar(codigoPessoa: number) {
    // this.router.navigate([`/pessoa/pessoa-editar/${codigoPessoa}`]);
    // this.router.navigate([`/pessoa/pessoa-editar`, {codigo: codigoPessoa}]);
    this.router.navigate(['/pessoa/pessoa-editar', codigoPessoa]);
  }

}
