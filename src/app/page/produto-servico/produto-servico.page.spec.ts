import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoServicoPage } from './produto-servico.page';

describe('ProdutoServicoPage', () => {
  let component: ProdutoServicoPage;
  let fixture: ComponentFixture<ProdutoServicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
