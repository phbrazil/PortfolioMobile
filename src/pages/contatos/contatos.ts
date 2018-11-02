import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


@Component({
        selector: 'page-contatos',
        templateUrl: 'contatos.html'
})
export class ContatosPage {

        constructor(public navCtrl: NavController, private call: CallNumber) {


        }

        ligarCelular() {

                this.call.callNumber("11981997228", true)
                        .then(res => console.log('Abrindo Discagem', res))
                        .catch(err => console.log('Erro abrindo discagem', err));


        }
        ligarFixo() {

                this.call.callNumber("11981997228", true)
                        .then(res => console.log('Abrindo Discagem', res))
                        .catch(err => console.log('Erro abrindo discagem', err));


        }

        //async callNumber():Promise<any>{



        //try{

        // await this.call.callNumber("11981997228", true);
        //.then(res => console.log('Abrindo Discagem', res))
        //.catch(err => console.log('Erro abrindo discagem', err));

        //}catch(e){
        //        console.error(e);


        
}
