import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  displayName: string;

  constructor(public navCtrl: NavController,
    private authService: AuthServiceProvider,
    private afAuth: AngularFireAuth) {

    const authObserver = afAuth.authState.subscribe(user => {
      this.displayName = '';
      if (user) {
        this.displayName = user.displayName;
        authObserver.unsubscribe();
      }
    });
  }

  public signOut() {
    this.authService.signOut()
      .then(() => {
        this.navCtrl.parent.parent.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
