import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancamentoFinanceiroCadastrarPage } from './lancamento-financeiro-cadastrar.page';

describe('LancamentoFinanceiroCadastrarPage', () => {
  let component: LancamentoFinanceiroCadastrarPage;
  let fixture: ComponentFixture<LancamentoFinanceiroCadastrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancamentoFinanceiroCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
