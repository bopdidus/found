import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next:HttpHandler){
    /*const authToken = this.auth.getToken();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    console.log(authReq, "clone")
    return next.handle(authReq);*/
    return next.handle(req)
  }
}
