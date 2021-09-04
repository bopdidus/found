import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Validators,FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { Category } from 'src/app/model/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    father: new FormControl('')
  })

  cats=[];

  constructor(public translate: TranslateService,private service: CategoryServiceService) {
    translate.use(translate.currentLang);
   }

  ngOnInit(): void {
    this.loadData()
  }

  onSubmit(){
    this.service.postCategory(this.categoryForm.value.name, this.categoryForm.value.father).subscribe((res)=>{
      console.info(res, "save with success")
      this.categoryForm.value.name = "";
    }, (error)=>{
      console.log(error, "there is an error")
    })
  }

  loadData(){
    this.service.getCategory().subscribe((res)=>{
      this.cats = res;
      console.log(this.cats);
    })
  }

}
