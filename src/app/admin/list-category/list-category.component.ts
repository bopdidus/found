import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {TranslateService} from '@ngx-translate/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit, AfterViewInit {

  cates = [];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public translate: TranslateService, private service: CategoryServiceService) {
    translate.use(translate.currentLang);
   }

  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    /*const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;*/
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    /*if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);*/
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Category) {
    /*if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;*/
  }

  loadData(){
    this.service.getCategory().subscribe((res)=>{
      this.cates = res;
      console.log(this.cates);
    })
  }

}
