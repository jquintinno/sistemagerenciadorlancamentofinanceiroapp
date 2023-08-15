import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancamentoFinanceiroEditarPage } from './lancamento-financeiro-editar.page';

describe('LancamentoFinanceiroEditarPage', () => {
  let component: LancamentoFinanceiroEditarPage;
  let fixture: ComponentFixture<LancamentoFinanceiroEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancamentoFinanceiroEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
