import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the MaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-mais',
  templateUrl: 'mais.html',
})
export class MaisPage {

  constructor(private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {

     
  
  }

  novoEmail(){
      let email = {
        to: 'pauloh2012sul@gmail.com',
        cc: '',
        bcc: [''],
        attachments: [''
        ],
        subject: 'Olá Paulo',
        body: '',
        isHtml: true
      };
      this.emailComposer.open(email);
      
    
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaisPage');
  }

}
