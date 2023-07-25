import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaEditarPage } from './pessoa-editar.page';

describe('PessoaEditarPage', () => {
  let component: PessoaEditarPage;
  let fixture: ComponentFixture<PessoaEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PessoaEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
