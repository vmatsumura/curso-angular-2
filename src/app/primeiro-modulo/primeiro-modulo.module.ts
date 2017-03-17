import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SegundoComponentComponent} from './segundo-component/segundo-component.component'

import {PrimeiroServicoService} from './primeiro-servico.service';

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [
    SegundoComponentComponent
  ],
  exports:[
    SegundoComponentComponent
  ],
  providers:[
    PrimeiroServicoService
  ]
})
export class PrimeiroModuloModule { }
