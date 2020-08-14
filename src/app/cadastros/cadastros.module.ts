import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroRoutingModule } from './cadastros.route';

import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { InstituicaoComponent } from './instituicao/instituicao.component';
import { CursoComponent } from './curso/curso.component';
import { CursoDetalheComponent } from './curso/curso-detalhe/curso-detalhe.component';

@NgModule({
    declarations: [
        CategoriaListComponent,
        CategoriaFormComponent,
        InstituicaoComponent,
        CursoComponent,
        CursoDetalheComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CadastroRoutingModule
    ],
    exports: []
})
export class CadastrosModule {}