import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  constructor(public navCtrl: NavController, private document: DocumentViewer) {

  }
        openLocalPdf(){
        const options: DocumentViewerOptions = {
          title: 'Senai'
        }
        this.document.viewDocument('assets/Certificados/CERTIFICADO_SENAI.pdf','application/pdf',options);

    }


}
