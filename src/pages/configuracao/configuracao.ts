import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paho } from 'ng2-mqtt/mqttws31';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

  ionViewDidLoad() {
  }

  client: any;

	txtServidor: string = 'mqtt.thingspeak.com';
	btnConectar: string = "Conectar";

	txtTopico: string = "channels/528588/publish/fields/field1/C0TNZ5ABY2EZYYLR";
	MensagensRecebidas: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}


	ConectarMQTT() {

		this.client = new Paho.MQTT.Client(this.txtServidor,1883, '');
		this.onMessage();
		this.onConnectionLost();
		this.client.connect({
			onSuccess: this.onConnected.bind(this)
		});

		if (this.btnConectar == "Desconectar") {
			this.btnConectar = "Conectar";
		}

	}

	onConnected(element) {
		this.client.subscribe(this.txtTopico);
		this.btnConectar = "Desconectar";
		this.sendMessage("Bem Vindo ao servidor mqtt");
	}

	sendMessage(message: string) {
		let packet = new Paho.MQTT.Message(message);
		packet.destinationName = this.txtTopico;
		this.client.send(packet);
	}

	onMessage() {
		
		this.client.onMessageArrived = (message: Paho.MQTT.Message) => {

			let now = moment();

			this.MensagensRecebidas.push({
				data: now.format("DD-MM-YYYY H:mm:ss"),
				mensagem: message.payloadString
			});
		};
	}

	onConnectionLost() {
		this.client.onConnectionLost = (responseObject: Object) => {
			console.log('Conexao finalizada : ' + JSON.stringify(responseObject));
		};
	}

}
