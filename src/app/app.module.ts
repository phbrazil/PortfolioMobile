import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExperienciaPage } from '../pages/experiencia/experiencia';
import { EducacaoPage } from '../pages/educacao/educacao';
import { CursosPage } from '../pages/cursos/cursos';
import { HabilidadesPage } from '../pages/habilidades/habilidades';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExperienciaPage,
    EducacaoPage,
    CursosPage,
    HabilidadesPage
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
    HabilidadesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentViewer,
    FileOpener,
    FileChooser,
    FilePath,
    File
  ]
})
export class AppModule {}
