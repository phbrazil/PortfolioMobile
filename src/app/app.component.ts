import { Component, ViewChild } from '@angular/core';
import { ModalController, Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ExperienciaPage } from '../pages/experiencia/experiencia';
import { EducacaoPage } from '../pages/educacao/educacao';
import { CursosPage } from '../pages/cursos/cursos';
import { HabilidadesPage } from '../pages/habilidades/habilidades';
import { ContatosPage } from '../pages/contatos/contatos';
import { FlashPage } from '../pages/flash/flash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private myModal: ModalController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of   ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'calendar' },
      { title: 'Experiência', component: ExperienciaPage, icon: 'home' },
      { title: 'Educação', component: EducacaoPage, icon: 'home' },
      { title: 'Cursos', component: CursosPage, icon: 'home' },
      { title: 'Habilidades', component: HabilidadesPage, icon: 'home' },
      { title: 'Contatos', component: ContatosPage, icon: 'home' },
      { title: 'Lanterna', component: FlashPage, icon: 'home' }

    ];

  }

  menuLanterna() {
    const lanterna = this.myModal.create("FlashPage");
    lanterna.present();

}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
