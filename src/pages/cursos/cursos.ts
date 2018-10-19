import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
//import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  //tentei usar o DocumentViewer com ionic 4 mas nao funcionou
  constructor(public navCtrl: NavController, private document: DocumentViewer) {
    //constructor(public navCtrl: NavController, private fileOpener: FileOpener) {

  }
  openLocalPdf() {
    var path = 'assets/Certificados/CERTIFICADO_SENAI.pdf';
    const options: DocumentViewerOptions = {
      title: 'Competência Transversal - Tecnologia da informação e da comunicação - SENAI'
    }
    //this.fileOpener.open(path, 'application/pdf')
    //.then(() => console.log('Arquivo aberto'))
    //.catch(e => console.log('Erro abrindo o arquivo ', e));
    this.document.viewDocument('assets/Certificados/CERTIFICADO_SENAI.pdf', 'application/pdf', options);

  }


}
