import { TestBed } from '@angular/core/testing';

import { TipoContaBancariaService } from './tipo-conta-bancaria.service';

describe('TipoContaBancariaService', () => {
  let service: TipoContaBancariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContaBancariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
