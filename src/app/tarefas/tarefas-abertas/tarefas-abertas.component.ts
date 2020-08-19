import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefas-abertas',
  templateUrl: './tarefas-abertas.component.html',
  styleUrls: ['./tarefas-abertas.component.css'],
  providers: [TarefaService]
})
export class TarefasAbertasComponent implements OnInit {

  tarefas$: Observable<any>;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {

    this.tarefas$ = this.tarefaService.obterTarefas$;

  }

}
