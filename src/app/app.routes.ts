import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './principal/home/home.component';
import { SobreComponent } from './principal/sobre/sobre.component';
import { TarefasComponent } from './tarefas/tarefas/tarefas.component';

const rotas: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'tarefas', component: TarefasComponent },
    { path: 'cadastros', 
        loadChildren: () => import('./cadastros/cadastros.module')
        .then( m => m.CadastrosModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}
