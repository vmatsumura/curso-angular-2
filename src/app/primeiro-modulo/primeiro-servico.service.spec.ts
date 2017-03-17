import { TestBed, inject } from '@angular/core/testing';

import { PrimeiroServicoService } from './primeiro-servico.service';

describe('PrimeiroServicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimeiroServicoService]
    });
  });

  it('should ...', inject([PrimeiroServicoService], (service: PrimeiroServicoService) => {
    expect(service).toBeTruthy();
  }));
});
