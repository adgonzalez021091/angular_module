import { Component } from '@angular/core';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { candidato } from 'src/app/models/candidato';
import { lista_candidatos } from 'src/app/mocks/lista_candidatos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-candidato',
  templateUrl: './detalle-candidato.component.html',
  styleUrls: ['./detalle-candidato.component.css']
})
export class DetalleCandidatoComponent {

  id:number = 10;
  candidato:candidato;
  iframUrl?:SafeResourceUrl;

  constructor(private sanitizer:DomSanitizer, private _router:Router, private route:ActivatedRoute ,private CandidatosService:CandidatosService){
    //UiServiceService.onSetId().subscribe((val) => {this.id = val})
    this.candidato=lista_candidatos[0]
    this.iframUrl = undefined
    let listaF = this.CandidatosService.getCandidatoFiltered();
    if(listaF.length == 0){
      this._router.navigate([''])
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id")!;
      let listaF = this.CandidatosService.getCandidatoFiltered();
      if(listaF.length == 0){
        this._router.navigate([''])
      }else{
      this.candidato = listaF.filter(o => o.id == this.id)[0]
      this.iframUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/'+this.candidato.id_file+'/preview')
      }

    })
  }
}
