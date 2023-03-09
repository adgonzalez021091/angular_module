import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListaCandidatosComponent } from './components/lista-candidatos/lista-candidatos.component';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { BannerIndexComponent } from './components/banner-index/banner-index.component';

import { DetalleCandidatoComponent } from './components/detalle-candidato/detalle-candidato.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BannerDetalleComponent } from './components/banner-detalle/banner-detalle.component';
const appRoutes:Routes = [
  {path:"",component:PrincipalComponent,
  children:[
    {path:"",component:BannerIndexComponent},
    {path:"search",component:ListaCandidatosComponent,
    children:[
      {path:"",component:BannerDetalleComponent},
      {path:":id",component:DetalleCandidatoComponent},
    ]},
    
  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ListaCandidatosComponent,
    CandidatoComponent,
    PrincipalComponent,
    BannerIndexComponent,
    DetalleCandidatoComponent,
    BannerDetalleComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
