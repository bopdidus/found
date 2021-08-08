import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Constant from '../../assets/constants/url.constant';
import { Category } from 'src/app/model/category';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  getCategory():Observable<Array<Category>>{
    return this.http.get<Array<Category>>(Constant.GET_CATEGORY, httpOptions);
  }

  postCategory(): Observable<Category>{
    return this.http.post<Category>(Constant.GET_CATEGORY, httpOptions);
  }

}
