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
    
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      }];


  }

  mostrarModal() {

    this.character = 'Paulo Teste';

    const modal = this.myModal.create("ModalPage",{data: this.character});
    modal.present();

  }


}









