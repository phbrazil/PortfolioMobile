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

  mostrarModal() {


    this.navCtrl.push(ModalPage, {
      name: 'Paulo Henrique Bezerra',
      idade: '28 anos',
      frase: 'Se não lembro não fiz',
      image: 'assets/icon/profile.jpg',
      ocupacao: '"Estuda" no Senac',
      raca: 'Humano',
      hobbies: [{ 'hobbie': 'Carros' },
      {
        'hobbie': 'Lanchão'
      },{
        'hobbie': 'Fotos' 
      },{
        'hobbie': 'Viagem'
      }
      ]
    });

  }


}









