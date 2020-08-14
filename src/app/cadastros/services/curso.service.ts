import { URL_API } from './../../url.api';
import { Curso } from './../../models/curso.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CursoService {

    private url: string = URL_API;
    private urlService: string = `${this.url}/curso`;

    constructor(private http: HttpClient ) {}

    obterCursos() : Observable<Curso[]> {

        return this.http.get<Curso[]>(this.urlService)
    }

}