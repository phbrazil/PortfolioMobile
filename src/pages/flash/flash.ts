import { Component } from '@angular/core';
import { ViewController, IonicPage, ModalController, NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';


//@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {

  ativado = false;

  constructor(public view: ViewController,
    public myModal: ModalController,
    private flashlight: Flashlight, public navCtrl: NavController) {
  }

  ligarLanterna() {
    this.flashlight.switchOn();
  }

  desligarLanterna() {
    this.flashlight.switchOff();

  }


  lanternaSwitch() {
    if (this.ativado == false) {
      this.flashlight.switchOn();
      this.ativado = true;
      console.log('ativado');
    } else if (this.ativado == true) {
      this.flashlight.switchOff();
      this.ativado = false;
      console.log('desativado');

    }

  }

  fecharFlash() {
    this.flashlight.switchOff();

    this.view.dismiss();

  }


}
