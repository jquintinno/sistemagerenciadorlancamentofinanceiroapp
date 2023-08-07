import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaBancariaEditarPage } from './conta-bancaria-editar.page';

describe('ContaBancariaEditarPage', () => {
  let component: ContaBancariaEditarPage;
  let fixture: ComponentFixture<ContaBancariaEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContaBancariaEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
