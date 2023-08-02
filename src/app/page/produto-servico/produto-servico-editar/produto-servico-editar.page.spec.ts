import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoServicoEditarPage } from './produto-servico-editar.page';

describe('ProdutoServicoEditarPage', () => {
  let component: ProdutoServicoEditarPage;
  let fixture: ComponentFixture<ProdutoServicoEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoServicoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
