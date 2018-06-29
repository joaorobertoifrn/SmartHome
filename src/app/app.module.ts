import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TopicoServiceProvider } from '../providers/topico-service/topico-service';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyBwYB99I0GnKnVyF7gdjOM3DFYdCLolajA",
  authDomain: "smarthome-16a0a.firebaseapp.com",
  databaseURL: "https://smarthome-16a0a.firebaseio.com",
  projectId: "smarthome-16a0a",
  storageBucket: "smarthome-16a0a.appspot.com",
  messagingSenderId: "1052364173702"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TopicoServiceProvider
  ]
})
export class AppModule {}
