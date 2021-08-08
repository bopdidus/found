import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
