import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoServicoPesquisarModalPage } from './produto-servico-pesquisar-modal.page';

describe('ProdutoServicoPesquisarModalPage', () => {
  let component: ProdutoServicoPesquisarModalPage;
  let fixture: ComponentFixture<ProdutoServicoPesquisarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoServicoPesquisarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
