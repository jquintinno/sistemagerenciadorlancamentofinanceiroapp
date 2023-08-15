import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancamentoFinanceiroPage } from './lancamento-financeiro.page';

describe('LancamentoFinanceiroPage', () => {
  let component: LancamentoFinanceiroPage;
  let fixture: ComponentFixture<LancamentoFinanceiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancamentoFinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
