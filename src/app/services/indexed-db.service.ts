import { Injectable } from '@angular/core';
import {DBSchema, IDBPDatabase, openDB} from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db: IDBPDatabase<MyDB>
  constructor() { }

  async connectToDb(){
    this.db = await openDB<MyDB>('found', 1, {
        upgrade(db){
          db.createObjectStore('items');
        }
    })
  }

  addItem(_title:string, _comments:string, _publishedate:string){
    return this.db.put('items', {title:_title, comments:_comments, publishedDate:_publishedate }, "value")
  }


}

interface MyDB extends DBSchema{
  items:{
    value:{
      title:string;
      comments: string;
      publishedDate: string;
    };
    key:string;
  }
}