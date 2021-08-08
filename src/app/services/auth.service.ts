import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(){
 
    return window.localStorage.getItem('token')
  }

  loggedIn(){
    return !! window.localStorage.get('token');
  }

}
