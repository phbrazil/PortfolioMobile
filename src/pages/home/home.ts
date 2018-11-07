import { Component } from '@angular/core';
import { NavController, ModalOptions } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  character;


  constructor(public params: NavParams,
    public myModal: ModalController,
    public navCtrl: NavController, private view: ViewController) {

  }

mostrarModal(){

    const data =[{
        name: 'Paulo Henrique Bezerra',
        idade: '28 anos',
        frase: 'Se não lembro não fiz',
        image: 'assets/icon/profile.jpg',
        ocupacao: '"Estuda" no Senac',
        raca: 'Humano',
        hobbies: 'Lanchão, Fotos, Viagem, Carros'
      }];

      const modal = this.myModal.create("ModalPage",{dados: data})
      modal.present();

    }


    

}




  /*mostrarModal() {


    this.navCtrl.push(ModalPage, {
      name: 'Paulo Henrique Bezerra',
      idade: '28 anos',
      frase: 'Se não lembro não fiz',
      image: 'assets/icon/profile.jpg',
      ocupacao: '"Estuda" no Senac',
      raca: 'Humano',
      hobbies: 'Lanchão, Fotos, Viagem, Carros'
    });

  }*/



}