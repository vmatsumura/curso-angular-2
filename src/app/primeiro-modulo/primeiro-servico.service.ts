import { Injectable } from '@angular/core';

@Injectable()
export class PrimeiroServicoService {

  constructor() { }

  getNumerosMalucos(){
    return [1,2,3,4,5,6,7,8,9];
  }
}
