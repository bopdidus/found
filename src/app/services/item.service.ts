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

  getItems(): Observable<any> {
    const resp = {
      headers: new HttpHeaders({
        'responseType':  'image/png',
        'Content-Type':  'image/png',
      }),
      responseType: "blob"
    };
    return this.http.get(Constant.GET_ITEM, httpOptions);
  }
  getImages(): Observable<any>{
   
    return this.http.get(Constant.GET_IMAGES, { responseType: "blob"} );
  }

  getItem(id):Observable<Item>{
    return this.http.get<Item>(Constant.GET_ITEM+`/${id}`, httpOptions);
  }

  postItem(post: FormData): Observable<Item>{
    console.log(post.get("title"))
    return this.http.post<Item>(Constant.GET_ITEM, post);
  }

  postSubscription(sub: PushSubscription){
    return this.http.post(Constant.NOTIFICATIONURL, sub).pipe()
  }

}
