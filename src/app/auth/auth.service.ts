import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }
  constructor() { }

}
