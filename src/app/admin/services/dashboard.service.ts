import { Injectable } from '@angular/core';
import * as Constant from '../../../assets/constants/url.constant';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  stats(){
    return this.http.get(Constant.DASHBOARD_URL);
  }

  
}
