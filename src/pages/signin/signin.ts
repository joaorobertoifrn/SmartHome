import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../model/usuario.model';
import { HomePage } from '../home/home';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  usuario: Usuario = new Usuario();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthServiceProvider) {
  }

  resetPassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  signIn() {
    if (this.form.form.valid) {
      this.authService.signIn(this.usuario)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é valida.');
          }
          toast.present();
        });
    }
  }
}
