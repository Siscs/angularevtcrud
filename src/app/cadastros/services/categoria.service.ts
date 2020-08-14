import { Categoria } from '../../models/categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../../url.api';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService {

    private url: string = URL_API;
    private urlService: string = `${this.url}/categoria`;

    constructor(private http: HttpClient) {
    }

    obterCategorias()
    {
        return this.http.get<Categoria[]>(this.urlService)
    }

    obterCategoria(id: number): Observable<Categoria> {
        return this.http.get<Categoria>(`${this.urlService}/${id}`);
    }

}