import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  configuracaoRoot = 'ConfiguracaoPage'
  monitorRoot = 'MonitorPage'
  controleRoot = 'ControlePage'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
