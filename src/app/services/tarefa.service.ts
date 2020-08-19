import { URL_API } from './../url.api';
import { Tarefa } from './../models/tarefa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TarefaService {
    
    urlApi = URL_API;

    constructor(private http: HttpClient) {}

    obterTarefas$: Observable<Tarefa[]> = this.http.get<Tarefa[]>(`${this.urlApi}/tarefas`);

    // obterTarefas() : Observable<Tarefa[]> {
        
    //     return this.http.get<Tarefa[]>(`${this.urlApi}/tarefas`);

    // } 

}