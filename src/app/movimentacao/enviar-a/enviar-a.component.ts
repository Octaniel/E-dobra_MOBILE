import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enviar-a',
  templateUrl: './enviar-a.component.html',
  styleUrls: ['./enviar-a.component.scss'],
})
export class EnviarAComponent implements OnInit {

  selectedType: string;
  types: SelectItem[];
  valorEnvia = "0,00"
  valorRecebem = "0,00"

  constructor(
      private actionSheetController: ActionSheetController,
      private router: Router,
  ) {
    this.types = [
      {label: 'Envia', value: 'envia'},
      {label: 'Recebem', value: 'recebem'},
    ];
  }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Escolher forma de pagamento',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Saldo E-dobra',
        role: 'destructive',
        icon: 'aperture-outline',
        handler: () => {
          this.router.navigate(['/movimentacao/concluirEnvio'])
          console.log('Delete clicked');
        }
      }, {
        text: 'Caixa geral de depositos',
        icon: 'bar-chart-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
