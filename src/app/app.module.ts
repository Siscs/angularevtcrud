import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
// import { CadastrosModule } from './cadastros/cadastros.module';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { HomeComponent } from './principal/home/home.component';
import { SobreComponent } from './principal/sobre/sobre.component';
import { TarefasComponent } from './tarefas/tarefas/tarefas.component';
import { TarefasListComponent } from './tarefas/tarefas-list/tarefas-list.component';
import { TarefasIniciadasComponent } from './tarefas/tarefas-iniciadas/tarefas-iniciadas.component';
import { TarefasFinalizadasComponent } from './tarefas/tarefas-finalizadas/tarefas-finalizadas.component';
import { TarefasAbertasComponent } from './tarefas/tarefas-abertas/tarefas-abertas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    SobreComponent,
    TarefasComponent,
    TarefasListComponent,
    TarefasIniciadasComponent,
    TarefasFinalizadasComponent,
    TarefasAbertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //CadastrosModule
    //FormsModule,
    //ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
