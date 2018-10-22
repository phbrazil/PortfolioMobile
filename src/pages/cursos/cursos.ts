import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  //tentei usar o DocumentViewer com ionic 4 mas nao funcionou
  constructor(private file: File,public navCtrl: NavController, private documentViewer: DocumentViewer) {
    // constructor(private fileOpener: FileOpener, private fileChooser: FileChooser, private filePath: FilePath) {

  }
  openLocalPdf() {
    var path = 'assets/Certificados/CERTIFICADO_SENAI.pdf';
    const options: DocumentViewerOptions = {
      title: 'Curso SENAI'
    }

    window.open(path);
    //var path = 'http://www.pauloportfolio.com/Certificados/CERTIFICADO_SENAI.pdf';
    //this.fileOpener.open(resolvedFilePath, 'application/pdf').then(value => {

    this.file.checkDir(this.file.dataDirectory, 'assets').
    then(_ => alert('Diretório existe')).catch(err => alert('Diretório não existe'));

    this.documentViewer.viewDocument(path, 'application/pdf', options);

    //this.fileOpener.open(path, 'application/pdf').then(value => {
    //alert('funcionou');
    //}).catch(err => {
    //  alert(JSON.stringify(err));
    //});
    //}).catch(err => {
    //alert(JSON.stringify(err));
    //});
    //this.fileOpener.open(path, 'application/pdf')
    //then(() => console.log('Arquivo aberto'))
    //.catch(e => console.log('Erro abrindo o arquivo ', e));



    //this.documentViewer.viewDocument(path, 'application/pdf', options);

  }


}
