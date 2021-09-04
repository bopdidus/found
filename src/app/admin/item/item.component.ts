import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  filePath: string;
  imageSrc:any;
  myForm: FormGroup;
  cates = [];
   file;

  constructor(public fb: FormBuilder, public translate: TranslateService,
     private _categoryService: CategoryServiceService, private _postService: ItemService) { 
    translate.use(translate.currentLang);
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      comments:[''],
      category:['', Validators.required],
      image:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadCategory()
  }

  loadCategory(){
    this._categoryService.getCategory().subscribe((res)=>{
      this.cates = res;
      console.log(this.cates);
    })
  }
  submit(f) {
    
    const formData = new FormData();
      formData.append("title", f.title);
      formData.append("comments", f.comments);
      formData.append("category", f.category);
      formData.append("image", this.file);
    
    this._postService.postItem(formData).subscribe((res)=>{
      console.log(res)
    },
    (error)=>{
      console.log(error);
    });
  } 

  readURL(event: Event): void {
    if ((event.target as HTMLInputElement).files && (event.target as HTMLInputElement).files[0]) {
        this.file = (event.target as HTMLInputElement).files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
}

}
