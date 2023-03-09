import { Component } from '@angular/core';
import {UiServiceService} from '../../services/ui-service.service'
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(private UiServiceService:UiServiceService){
  }
}
