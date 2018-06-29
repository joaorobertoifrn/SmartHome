import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        public afAuth: AngularFireAuth
      ){
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Controle', component: 'ControlePage' },
      { title: 'Configuração', component: 'ConfiguracaoPage'},
      { title: 'Logout', component: ''}
    ];
 
  }

  initializeApp() {
    this.afAuth.authState.subscribe(usuario => {
      if (usuario) {
        this.rootPage = 'ControlePage';
      } else {
        this.rootPage = 'SigninPage';
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title:string, component:string}) {
    
    switch (page.title) {
      case 'Logout':
        this.afAuth.auth.signOut();
        this.nav.setRoot('SigninPage');
      break;
    
      default:
        this.nav.setRoot(page.component);
    }
  }
}