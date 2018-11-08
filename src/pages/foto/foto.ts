import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

/**
 * Generated class for the FotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage {

  foto: Array<any>[];


  constructor(
    public platform: Platform,
    public params: NavParams,
    public view: ViewController
  ) {

    this.foto = params.get('foto');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoPage');
  }

  fecharFoto() {
    this.view.dismiss();

  }

}
