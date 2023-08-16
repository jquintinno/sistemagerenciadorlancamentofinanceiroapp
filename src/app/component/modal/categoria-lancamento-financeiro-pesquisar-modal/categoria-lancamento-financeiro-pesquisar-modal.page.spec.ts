import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaLancamentoFinanceiroPesquisarModalPage } from './categoria-lancamento-financeiro-pesquisar-modal.page';

describe('CategoriaLancamentoFinanceiroPesquisarModalPage', () => {
  let component: CategoriaLancamentoFinanceiroPesquisarModalPage;
  let fixture: ComponentFixture<CategoriaLancamentoFinanceiroPesquisarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaLancamentoFinanceiroPesquisarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
