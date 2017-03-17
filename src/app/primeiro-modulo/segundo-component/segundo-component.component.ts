import { Component, OnInit } from '@angular/core';

import {PrimeiroServicoService} from '../primeiro-servico.service';

@Component({
	selector: 'app-segundo-component',
	templateUrl: './segundo-component.component.html',
	styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent implements OnInit {

	teste: string;  
	arrayMaroto: number[];

	constructor(private servico: PrimeiroServicoService) {
		this.teste = "Primeiro teste!!!!";
				
		this.arrayMaroto = this.servico.getNumerosMalucos();
	 }

	ngOnInit() {
	}

}
