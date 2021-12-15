
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Constant from '../../assets/constants/url.constant';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }

  register(user: User){
    let obj = JSON.parse(JSON.stringify(user));
    console.log(obj)
    return this.http.post(Constant.POST_USER_REGISTER, obj, httpOptions);
  }

  login(credential:any): Observable<User>{
    credential = JSON.parse(JSON.stringify(credential));
    console.log(credential)
    return this.http.post<User>(Constant.POST_USER_LOGIN, credential, httpOptions);
  }
}




  

 
