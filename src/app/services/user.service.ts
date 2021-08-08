
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

  register(user: User):Observable<User>{
    let obj = JSON.stringify(user);
    console.log(obj)
    return this.http.post<User>(Constant.POST_USER_REGISTER, user, httpOptions);
  }

  login(credential:any): Observable<User>{
    credential = JSON.stringify(credential);
    console.log(credential)
    return this.http.post<User>(Constant.POST_USER_LOGIN, credential, httpOptions);
  }
}




  

 
