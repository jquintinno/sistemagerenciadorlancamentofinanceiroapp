import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaPesquisarModalPage } from './pessoa-pesquisar-modal.page';

describe('PessoaPesquisarModalPage', () => {
  let component: PessoaPesquisarModalPage;
  let fixture: ComponentFixture<PessoaPesquisarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PessoaPesquisarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
