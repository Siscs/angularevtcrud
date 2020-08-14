import { CursoService } from './../services/curso.service';
import { Curso } from './../../models/curso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [ CursoService ]
})
export class CursoComponent implements OnInit {

  public cursos: Curso[];

  public cursoSelecionado: string = undefined;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {

    this.cursoService.obterCursos()
      .subscribe(res => {
        this.cursos = res;
        // console.log(this.cursos);
      }, 
      error => console.log(error));

  }

  mostrarCursoSelecionado(cursoSel)
  {
    this.cursoSelecionado = cursoSel;
  }

}
