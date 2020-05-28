import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { AvaliarComponent } from './avaliar/avaliar.component';
import { CompartilharComponent } from './compartilhar/compartilhar.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  declarations: [
    HomeComponent,
    AjudaComponent,
    AvaliarComponent,
    CompartilharComponent,
    FeedBackComponent,
    SobreComponent
  ]
})
export class FolderPageModule {}
