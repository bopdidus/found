import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../shared/services/loader.service';
import { finalize} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public _loaderService: LoaderService) {}

 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.headers.get("intercepts")){
      this._loaderService.isLoading.next(true);
        return next
            .handle(req)
            .pipe(  finalize(
              ()=>{
                this._loaderService.isLoading.next(false)
              }
            ));

    }else{
      return next.handle(req);
    }
    
}
  

}
