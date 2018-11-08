import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExperienciaPage } from '../pages/experiencia/experiencia';
import { EducacaoPage } from '../pages/educacao/educacao';
import { CursosPage } from '../pages/cursos/cursos';
import { HabilidadesPage } from '../pages/habilidades/habilidades';
import { ContatosPage } from '../pages/contatos/contatos';
import { FlashPage } from '../pages/flash/flash';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { ModalController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExperienciaPage,
    EducacaoPage,
    CursosPage,
    HabilidadesPage,
    ContatosPage,
    FlashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExperienciaPage,
    EducacaoPage,
    CursosPage,
    HabilidadesPage,
    ContatosPage,
    FlashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentViewer,
    FileOpener,
    FileChooser,
    FilePath,
    File,
    FileTransfer,
    CallNumber,
    SMS,
    ModalController,
    Flashlight
  ]
})
export class AppModule {}
