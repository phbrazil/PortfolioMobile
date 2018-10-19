import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  //constructor(public navCtrl: NavController, private document: DocumentViewer) {
  constructor(public navCtrl: NavController, private fileOpener: FileOpener) {

  }
        openLocalPdf(){
        const options: DocumentViewerOptions = {
          title: 'Senai'
        }
        this.fileOpener.open('assets/Certificados/CERTIFICADO_SENAI.pdf', 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
              //this.document.viewDocument('assets/Certificados/CERTIFICADO_SENAI.pdf','application/pdf',options);

    }


}
