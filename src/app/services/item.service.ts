import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Constant from '../../assets/constants/url.constant';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Item } from 'src/app/model/item';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item>{
    return this.http.get<Item>(Constant.GET_ITEM, httpOptions);
  }
  getItem(id):Observable<Item>{
    return this.http.get<Item>(Constant.GET_ITEM+`/${id}`, httpOptions);
  }

  postItem(): Observable<Item>{
    return this.http.post<Item>(Constant.GET_ITEM, httpOptions);
  }

}
