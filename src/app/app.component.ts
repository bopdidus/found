import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'found';
  constructor(private swUpdate: SwUpdate, public translate: TranslateService){
    translate.use(translate.currentLang);
  }
  
  ngOnInit(){
    this.reloadCache();
  }

  reloadCache(){
    // check if the browser supports
    if(!this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
        if( this.translate.getTranslation("updating")){
          window.location.reload();
        }
      })
    }
  }

}
