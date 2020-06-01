import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NaoAutorizadoComponent} from './core/nao-autorizado.component';
import {PaginaNaoEncontradaComponent} from './core/pagina-nao-encontrada.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'folder',
        pathMatch: 'full'
    },
    {
        path: 'folder',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./seguranca/seguranca.module').then(m => m.SegurancaModule)
    },
    {
        path: 'movimentacao',
        loadChildren: () => import('./movimentacao/movimentacao.module').then(m => m.MovimentacaoModule)
    }, {
        path: 'atividade',
        loadChildren: () => import('./atividade/atividade.module').then(m => m.AtividadeModule)
    },

    {path: 'nao-autorizado', component: NaoAutorizadoComponent},
    {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
    {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
