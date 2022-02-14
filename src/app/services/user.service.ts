
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Constant from '../../assets/constants/url.constant';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import * as bcrypt from 'bcryptjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'intercepts': 'intercepts',
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
  saveUser(user: User){
    let obj = JSON.parse(JSON.stringify(user));
    console.log(obj)
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'intercepts': 'intercepts',
        'auth-token':window.sessionStorage.getItem("auth-token"),
        'auth-email': window.sessionStorage.getItem('auth-email')
      })
    }
    console.log(httpOption.headers,'headers');
    return this.http.post(Constant.POST_USER_REGISTER, obj, httpOption);
  }

  login(credential:any): Observable<User>{
    credential = JSON.parse(JSON.stringify(credential));
    console.log(credential)
    return this.http.post<User>(Constant.POST_USER_LOGIN, credential, httpOptions);
  }

  getUsers():Observable<Array<User>>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'intercepts': 'intercepts',
        'auth-token':window.sessionStorage.getItem("auth-token"),
        'auth-email': window.sessionStorage.getItem('auth-email')
      })
    }
    return this.http.get<Array<User>>(Constant.GET_USERS, httpOption);
  }

  HashPassword(pass:string){
    // hier soll das Passwort hashen, bevor es gesendet wurde
  }

}




  

 
