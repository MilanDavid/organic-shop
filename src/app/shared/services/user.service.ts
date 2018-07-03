import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  user: Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }

}
