import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoServicoCadastrarPage } from './produto-servico-cadastrar.page';

describe('ProdutoServicoCadastrarPage', () => {
  let component: ProdutoServicoCadastrarPage;
  let fixture: ComponentFixture<ProdutoServicoCadastrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoServicoCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
