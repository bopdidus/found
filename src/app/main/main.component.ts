import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import { CategoryServiceService } from '../services/category-service.service';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import * as Constant from '../../assets/constants/url.constant';
import { Item } from '../model/item';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarComponent } from '../shared/components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  images = [];
  private liste: [any];
  
  constructor(public translate: TranslateService, private catService:CategoryServiceService,
     private router: Router,
     private _snackBar: MatSnackBar,
     private itService: ItemService,
     private swUpdate: SwUpdate,
     private sanitizer: DomSanitizer,
     private swPush: SwPush) {
    translate.use(translate.currentLang)
   }

  ngOnInit(): void {
    /*this._snackBar.openFromComponent(SnackbarComponent, {
      data: { comp: "Login", type:1},
      panelClass: 'success',
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });*/
    this.getCategories();
    this.getItems();
    
  }

  getItems(){
    this.itService.getItems().subscribe(item=>{
      console.log(item)
      this.items = item;

    },
    (err: HttpErrorResponse)=>{
      this._snackBar.openFromComponent(SnackbarComponent, {
          data: { comp: "Item", type:0},
          panelClass: 'panel-danger',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
       }
    )
  }


  getCategories(){
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
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      return reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getSantizeUrl(url : string) {
  return this.sanitizer.bypassSecurityTrustUrl(Constant.PUBLIC_RESOURCES +  url);
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
