import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaContaBancariaPesquisarModalPage } from './categoria-conta-bancaria-pesquisar-modal.page';

describe('CategoriaContaBancariaPesquisarModalPage', () => {
  let component: CategoriaContaBancariaPesquisarModalPage;
  let fixture: ComponentFixture<CategoriaContaBancariaPesquisarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaContaBancariaPesquisarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
