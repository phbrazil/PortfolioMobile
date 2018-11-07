import { Component } from '@angular/core';
import { NavController, ModalOptions } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public myModal: ModalController, public navCtrl: NavController, private view: ViewController) {

  }

  mostrarModal() {

    const modal = this.myModal.create("ModalPage");
    modal.present();

  }


}









