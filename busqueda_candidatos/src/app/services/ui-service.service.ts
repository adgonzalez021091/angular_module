import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private subject = new Subject<any>()
  private id:number = 0; 
  constructor() { 
    
  }
  setId(tipo:number){
    this.id = tipo;
    this.subject.next(this.id)
  }
  onSetId():Observable<any>{
    console.log("escuchoooo")
    return this.subject.asObservable();
  } 
}
