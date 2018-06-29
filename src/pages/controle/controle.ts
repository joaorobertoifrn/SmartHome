import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paho } from 'ng2-mqtt/mqttws31';

@IonicPage()
@Component({
  selector: 'page-controle',
  templateUrl: 'controle.html',
})
export class ControlePage {

  client: any;
  txtServidor: string;
  txtPorta: number;
  txtTopico: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  Conectar() {
    this.client = new Paho.MQTT.Client(this.txtServidor, '');
    this.client.connect({
      onSuccess: this.onConnected.bind(this)
    });
  }

  onConnected(element) {
    this.client.subscribe(this.txtTopico);
    this.sendMessage("Conectado ao topico de IoT");
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = this.txtTopico;
    this.client.send(packet);
  }

  Enviar(element: any, mensaje: string) {
    this.sendMessage(`P${mensaje}${element.checked ? 'on' : 'off'}`);
  }

}
