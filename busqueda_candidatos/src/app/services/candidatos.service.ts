import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {candidato} from '../models/candidato'
import {lista_candidatos} from '../mocks/lista_candidatos'
import { Observable,of, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private candidatos:candidato[]=[]
  private subject = new Subject<any>()
  private loading_candidatos:boolean = false;
  private subject2 = new Subject<any>()
  private url:string = "http://127.0.0.1:8000/EPE/get_recoms"
  constructor(private http:HttpClient) { }
  getCandidatoFiltered(){
    return this.candidatos;
  }
  filterListaCandidatos(texto:string):any{
    const payload = {
      vac:texto
    }
    this.loading_candidatos = true;
    this.subject2.next(this.loading_candidatos)
    console.log(this.url,payload)
    this.http.post(this.url,payload)
    .pipe(
      map((ret:any) => {
        this.loading_candidatos = false;
        this.subject2.next(this.loading_candidatos)
        this.candidatos = ret.resultado
        this.subject.next(this.candidatos)
        return []
      }),
      catchError((err) => {
        this.loading_candidatos = false;
        this.subject2.next(this.loading_candidatos)
        this.candidatos = lista_candidatos.slice(0,2);
        this.subject.next(this.candidatos)
        console.log(this.candidatos.length)
        return []
    })
    ).subscribe()
  }
  onFilter():Observable<any>{
    return this.subject.asObservable();
  } 
  onLoading():Observable<any>{
    return this.subject2.asObservable();
  }
  getListaCandidatos():Observable <candidato[]>{
    return this.http.post<candidato[]>(this.url,{vac:""})
    .pipe(
      map((ret:any) => {
        this.candidatos = ret.resultado
        this.subject.next(this.candidatos)
        return []
      }),
      catchError((err) => {
        
        this.candidatos = lista_candidatos
        this.subject.next(this.candidatos)
        console.log(this.candidatos.length)
        return []
    })
    )
  }}

