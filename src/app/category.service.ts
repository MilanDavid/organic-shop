import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll(){
    return this.db.list('/categories',  cat => cat.orderByChild('name')).snapshotChanges().map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() }));
    });
  }

}
