import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { connect } from 'mqtt';
//import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

  ionViewDidLoad() {
  }

	txtServidor: string = 'mqtt://broker.mqttdashboard.com';

  MensagensRecebidas: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}


	ConectarMQTT() {

    let cliente  = connect(this.txtServidor,{clientId:'par-xyz-008-sub'});
    cliente.on('connect',function(){
    cliente.subscribe('smarthouse/par/led3');
    cliente.subscribe('smarthouse/par/servoA1');
    console.log('Conectou');
  });
}

  getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

	onConnected(element) {
		//this.client.subscribe(this.txtTopico);
		//this.btnConectar = "Desconectar";
		//this.sendMessage("Bem Vindo ao servidor mqtt");
	}

	sendMessage(message: string) {
		//let packet = new Paho.MQTT.Message(message);
		//packet.destinationName = this.txtTopico;
		//this.client.send(packet);
	}

	onMessage() {

		//this.client.onMessageArrived = (message: Paho.MQTT.Message) => {

			//let now = moment();

			//this.MensagensRecebidas.push({
				//data: now.format("DD-MM-YYYY H:mm:ss"),
				//mensagem: message.payloadString
			//});
		//};
	}

	onConnectionLost() {
		//this.client.onConnectionLost = (responseObject: Object) => {
		//	console.log('Conexao finalizada : ' + JSON.stringify(responseObject));
	//	};
	}

}
