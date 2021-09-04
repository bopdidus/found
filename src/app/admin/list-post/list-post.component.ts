import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  dataItems:any;
  imgs:any;
  currentImage:any;

  constructor(private _postService: ItemService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadItems()
  }

  loadItems(){
    this._postService.getItems().subscribe((res)=>{
      console.info(res)
      this.dataItems = res;
    },
    (error)=>{
      console.log(error);
    })

    this._postService.getImages().subscribe((res)=>{
      console.info(res)
    },
    (error)=>{
      console.log(error);
    })
  }

  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {
          type: 'image/jpg'
      });
    }

}
