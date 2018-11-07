import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  dados : Array <any> [];
  hobbies : Array <any> [];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public view: ViewController
  ) {

    
    let name = params.get('name');
    let idade = params.get('idade');
    let frase = params.get('frase');
    let image= params.get('image');
    let ocupacao = params.get('ocupacao');
    let raca = params.get('raca');
    let hobbie = params.get('hobbies');

    this.dados= [name,idade, frase,image, ocupacao,raca];
    this.hobbies = hobbie;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  fecharModal() {
    this.view.dismiss();

  }

}
