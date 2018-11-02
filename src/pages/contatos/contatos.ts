import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';


@Component({
        selector: 'page-contatos',
        templateUrl: 'contatos.html'
})
export class ContatosPage {

        constructor(private sms: SMS, public navCtrl: NavController, private call: CallNumber) {


        }

        enviarSMS(){
                this.sms.send('11981997228', "Teste");

        }

        ligarCelular() {

                this.call.callNumber("11981997228", true)
                        .then(res => console.log('Abrindo Discagem', res))
                        .catch(err => console.log('Erro abrindo discagem', err));


        }
        ligarFixo() {

                this.call.callNumber("1156633514", true)
                        .then(res => console.log('Abrindo Discagem', res))
                        .catch(err => console.log('Erro abrindo discagem', err));


        }




        
}
