import { Injectable } from '@angular/core';
import {
  AngularFire,
  AuthProviders,
  AuthMethods,
  FirebaseListObservable
} from 'angularfire2';

@Injectable()
export class AngularFireService {

  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor(public angularfire: AngularFire) {
    this.messages = this.angularfire.database.list('messages');
  }

  loginWithGoogle() {
    return this.angularfire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() { return this.angularfire.auth.logout(); }

  sendMessage(text) {
    let message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message); // set, update, remove
  }

}
