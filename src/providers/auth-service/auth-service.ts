import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Import da Classe Usuario
import { Usuario } from './../../model/usuario.model';

// Import Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthServiceProvider {
  
  usuario: Observable<firebase.User>
   
  constructor(private angularFireAuth: AngularFireAuth) {
    this.usuario = angularFireAuth.authState;
   }

  criarUsuario(usuario: Usuario) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  signIn(usuario: Usuario) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password);
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }


}
