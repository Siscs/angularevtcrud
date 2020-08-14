import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { InstituicaoComponent } from './instituicao/instituicao.component';
import { CursoComponent } from './curso/curso.component';

const rotas: Routes = [
    { path: '', component: CategoriaListComponent},
    { path: 'categorias', component: CategoriaListComponent},
    { path: 'categoria', component: CategoriaFormComponent},
    { path: 'categoria/:id', component: CategoriaFormComponent},
    { path: 'instituicoes', component: InstituicaoComponent},
    { path: 'cursos', component: CursoComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroRoutingModule {}