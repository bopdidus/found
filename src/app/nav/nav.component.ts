import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isConnected=false;

  Langs = ['en', 'fr']

  constructor(public translate: TranslateService, private session:SessionStorageService) { }

  ngOnInit(): void {
    (this.session.retrieve("user"))? this.isConnected=false: this.isConnected=true;
    
  }

}
