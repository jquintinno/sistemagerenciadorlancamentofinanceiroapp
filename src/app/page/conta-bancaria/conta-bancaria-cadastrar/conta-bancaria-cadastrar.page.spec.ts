import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaBancariaCadastrarPage } from './conta-bancaria-cadastrar.page';

describe('ContaBancariaCadastrarPage', () => {
  let component: ContaBancariaCadastrarPage;
  let fixture: ComponentFixture<ContaBancariaCadastrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContaBancariaCadastrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
