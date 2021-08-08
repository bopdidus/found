import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
   
    const secureReq = req.clone({
      url: req.url.replace('http://', 'https://')
    });
   
    // send the cloned, "secure" request to the next handler.
    return next.handle(secureReq);
  }

}
