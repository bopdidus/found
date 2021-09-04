import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isOpened:EventEmitter<any> = new EventEmitter()
  Langs = ['en', 'fr']

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  toogleSideBar(){
    this.isOpened.emit()
  }

}
