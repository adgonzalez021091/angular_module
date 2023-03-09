import { Component } from '@angular/core';
import {CandidatosService} from '../../services/candidatos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  texto_busqueda:string = "";
  error:string = "";
  constructor(private CandidatosService:CandidatosService,private _router: Router){

  }
  onSearch(){
    this.error = ""
    if(this.texto_busqueda.trim() == ''){
      this.error = "Debes diligenciar la descripción para buscar"
    }else{
      this.CandidatosService.filterListaCandidatos(this.texto_busqueda);
      this._router.navigate(['search'])
    
  }
  }
}
