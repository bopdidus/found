import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isOpened:EventEmitter<any> = new EventEmitter()
  Langs = ['en', 'fr']

  constructor(public translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
  }

  toogleSideBar(){
    this.isOpened.emit()
  }

  sign_out(){
    this.router.navigate(['/admin/login']);     
    window.sessionStorage.removeItem("auth-token");
      window.sessionStorage.removeItem("auth-email");
  }

}
