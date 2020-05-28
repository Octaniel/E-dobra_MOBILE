import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { HomeComponent } from './home/home.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { AvaliarComponent } from './avaliar/avaliar.component';
import { CompartilharComponent } from './compartilhar/compartilhar.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ajuda',
    component: AjudaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'avaliar',
    component: AvaliarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'compartilhar',
    component: CompartilharComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'feedBack',
    component: FeedBackComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sobre',
    component: SobreComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
