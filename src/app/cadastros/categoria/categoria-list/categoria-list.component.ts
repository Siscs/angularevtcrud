import { CategoriaService } from '../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],
  providers: [CategoriaService]
})
export class CategoriaListComponent implements OnInit {

  public categorias : Categoria[] = []

  constructor(private categoriaService: CategoriaService) { }


  ngOnInit(): void {
    this.obterCategorias();
  }

  obterCategorias() {

    this.categoriaService.obterCategorias()
    .subscribe((result) => {

      // console.log(result);
      this.categorias = result;

    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }

  pesquisar() {
    console.log('pequisar');
  }

}
