import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  dataItems:any;
  imgs:any;
  currentImage:any;
  selection = new SelectionModel<Item>(true, []);
  posts = [];

  constructor(private _postService: ItemService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadItems()
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.posts.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.posts);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Item) {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }

  loadItems(){
    this._postService.getItems().subscribe((res)=>{
      console.info(res)
      this.dataItems = res;
      this.posts = res;
    },
    (error)=>{
      console.log(error);
    })

    /*this._postService.getImages().subscribe((res)=>{
     this.createImageFromBlob(res)
    },
    (error)=>{
      console.log(error);
    })*/
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

    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.currentImage = reader.result;
      }, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
   }
}
