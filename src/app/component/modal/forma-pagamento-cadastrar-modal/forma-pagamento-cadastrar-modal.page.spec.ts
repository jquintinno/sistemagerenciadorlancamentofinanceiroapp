import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormaPagamentoCadastrarModalPage } from './forma-pagamento-cadastrar-modal.page';

describe('FormaPagamentoCadastrarModalPage', () => {
  let component: FormaPagamentoCadastrarModalPage;
  let fixture: ComponentFixture<FormaPagamentoCadastrarModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormaPagamentoCadastrarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
