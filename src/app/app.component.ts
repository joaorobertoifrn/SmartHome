import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth) {

    afAuth.authState.subscribe(usuario => {
      if (usuario) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = SigninPage;
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


