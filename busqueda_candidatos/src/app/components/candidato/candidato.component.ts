import { Component ,Input} from '@angular/core';
import { candidato } from 'src/app/models/candidato';
import {lista_candidatos  } from 'src/app/mocks/lista_candidatos';
import {UiServiceService} from '../../services/ui-service.service'
@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {
@Input() candidato:candidato;
constructor(private UiServiceService:UiServiceService){
  this.candidato = lista_candidatos[0];
}

}
