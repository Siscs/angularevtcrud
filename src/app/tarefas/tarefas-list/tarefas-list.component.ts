import { Tarefa } from './../../models/tarefa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {

  tarefas: Tarefa[] = [
    {
        "id": 1,
        "descricao": "Comprar cursos api/angular",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 2,
        "descricao": "Curso Angular avançado",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 3,
        "descricao": "Curso de RabbitMQ",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 4,
        "descricao": "Curso Redis",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 5,
        "descricao": "Curso Enterprise Applications",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 6,
        "descricao": "Curso de MVC Core",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 7,
        "descricao": "Curso CSS grid layout",
        "iniciada": false,
        "finalizada": false
    },
    {
        "id": 8,
        "descricao": "Curso Azure Serverless",
        "iniciada": false,
        "finalizada": false
    }
];
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(index, operacao) {

  }

}
