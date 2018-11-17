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
        

        const data = [{
            name: 'Paulo Henrique Bezerra',
            idade: '28 anos',
            frase: 'Se não lembro não fiz',
            image: 'assets/icon/profile.jpg',
            ocupacao: '"Estuda" no Senac',
            raca: 'Humano'
        },
        {
            name: 'Paulo Henrique Bezerra 2',
            idade: '28 anos 2',
            frase: 'Se não lembro não fiz',
            image: 'assets/icon/profile.jpg',
            ocupacao: '"Estuda" no Senac',
            raca: 'Humano'
        }];

        const hobbies = [{
            'hobbie': 'Lanchão'
        },
        {
            'hobbie': 'Fotografias'
        },
        {
            'hobbie': 'Viagem'
        },
        {
            "hobbie": 'Carros'
        },
        {
            "hobbie": 'Games'
        },
        {
            "hobbie": 'Séries'
        }];

        const modal = this.myModal.create("ModalPage", { dados: data, hobbies: hobbies })
        modal.present();

    }

    mostrarFoto() {

        console.log('cheguei aqui');

        const foto = [{
            image: 'assets/icon/profile.jpg',
        }];

        const fototela = this.myModal.create("FotoPage", { foto: foto})
        fototela.present();

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