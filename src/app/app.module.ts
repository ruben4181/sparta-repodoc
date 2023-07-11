import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrestadorHeaderComponent } from './components/prestador-header/prestador-header.component';
import { RouterModule, Routes } from '@angular/router';
import { ReqEspecificosComponent } from './components/req-especificos/req-especificos.component';
import { ReqGeneralesComponent } from './components/req-generales/req-generales.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { SoporcontratosComponent } from './components/soporcontratos/soporcontratos.component';

const appRoutes: Routes = [
  { path: '', component: ReqGeneralesComponent },
  { path: 'especificos', component: ReqEspecificosComponent },
  { path: 'consultas', component: ConsultaComponent },
  { path: 'soportes', component: SoporcontratosComponent },
];

@NgModule({
  declarations: [AppComponent, PrestadorHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
