import { Component } from '@angular/core';
import { candidato } from 'src/app/models/candidato';
import {CandidatosService} from '../../services/candidatos.service'
import {UiServiceService} from '../../services/ui-service.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css']
})
export class ListaCandidatosComponent {
  candidatos: candidato[] = []
  buscando:boolean = true;
  constructor(private _router:Router, private CandidatosService:CandidatosService, private UiServiceService:UiServiceService){
    this.CandidatosService.onFilter().subscribe((res) => this.candidatos= res)//.getListaCandidatos().subscribe((res) => {this.candidatos = res})
    this.CandidatosService.onLoading().subscribe((res) => this.buscando = res)
    
  }
  ngOnInit(): void {
    this.CandidatosService.onFilter().subscribe((res) => this.candidatos= res)//.getListaCandidatos().subscribe((res) => {this.candidatos = res})
    this.CandidatosService.onLoading().subscribe((res) => this.buscando = res)
  }
}
