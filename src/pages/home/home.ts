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
    var mydata = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/icon/profile.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]}];
      

const modaloptions : ModalOptions = {
  enableBackdropDismiss: false

};
const modal = this.myModal.create("ModalPage",{data: mydata},modaloptions);
modal.present();

  }


}









