import { Curso } from './../../../models/curso.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  @Input() 
  public curso: Curso

  @Output()
  public evento: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  comprar() {
    this.evento.emit(this.curso.nome);
  }

}
