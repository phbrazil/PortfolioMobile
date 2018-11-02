import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';


@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  //tentei usar o DocumentViewer com ionic 4 mas nao funcionou
  constructor(private file: File, private transfer: FileTransfer, 
    private platform: Platform, public navCtrl: NavController, 
    private documentViewer: DocumentViewer) {
    // constructor(private fileOpener: FileOpener, private fileChooser: FileChooser, private filePath: FilePath) {

  }
  openLocalPdf() {

    const options: DocumentViewerOptions = {
      title: 'Curso SENAI'
    }
    let path = 'assets/Certificados/CERTIFICADO_SENAI.pdf'

    if(this.platform.is('ios')){
      //path=this.file.documentsDirectory;
    }else {
      //path = this.file.dataDirectory;

    }
    const transfer = this.transfer.create();
    //transfer.download('http://www.pauloportfolio.com/Certificados/CERTIFICADO_SENAI.pdf',path+'myFile.pdf').then(entry =>{
    //let url = entry.toUrl();

    this.documentViewer.viewDocument(path,'application/pdf',{});
    
    //this.file.checkDir(this.file.dataDirectory, path).
    //then(_ => alert('Diretório existe')).catch(err => alert('Diretório '+path+' não existe'));


    //})

    
    

    //var path = 'http://www.pauloportfolio.com/Certificados/CERTIFICADO_SENAI.pdf';
    //this.fileOpener.open(resolvedFilePath, 'application/pdf').then(value => {


    

    //this.documentViewer.viewDocument(path, 'application/pdf', {});

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
