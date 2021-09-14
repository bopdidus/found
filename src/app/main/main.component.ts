import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import { CategoryServiceService } from '../services/category-service.service';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import * as Constant from '../../assets/constants/url.constant';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // MatPaginator Output
  pageEvent: PageEvent;

  tab = [1,2,3,4,5,6,7,8,9,0]
  cats: [any] = [""];
  items:any;
  sousCats:[any] = [""];
  private liste: [any];
  
  constructor(public translate: TranslateService, private catService:CategoryServiceService,
     private router: Router,
     private itService: ItemService,
     private swUpdate: SwUpdate,
     private swPush: SwPush) {
    translate.use(translate.currentLang)
   }

  ngOnInit(): void {
    this.catService.getCategory().subscribe(cat=> {
      console.log(cat)
      this.cats.pop();
      this.sousCats.pop();
      
      for(let c of cat){
        if(c.father == null){
          this.cats.push(c);
        }else{
          this.sousCats.push(c);
        }
      }
      this.liste = Object.assign([], this.sousCats);
    } );

    this.itService.getItems().subscribe(item=>{
      console.log(item)
      this.items = item;
    });
  }

  currentCategory(cat){
    console.log(cat);
    this.sousCats.length=1;
    this.sousCats.pop();
    this.liste.forEach(elem=> {
      if(elem.father.id == cat){
        this.sousCats.push(elem)
      }
    })
  }

  getView(id){
    this.router.navigate(['/App/view', { id: id }]);
  }

  subscribeToNotification(){
    if(this.swUpdate.isEnabled){
      this.swPush.requestSubscription({
        serverPublicKey: Constant.VALID_KEY
      }).then(sub=>{
        this.itService.postSubscription(sub).subscribe();
      })
    }
  }
}
