import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private session:SessionStorageService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(this.session.retrieve("user"),"test")
    return (this.session.retrieve("user")?true:false);
  }
  
}
