import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {TranslateService} from '@ngx-translate/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from 'src/app/model/category';
import {SelectionModel} from '@angular/cdk/collections';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['number', 'Name'];
  cates: MatTableDataSource<Category>;
  selection = new SelectionModel<Category>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public translate: TranslateService, private _snackBar: MatSnackBar,
    private service: CategoryServiceService, public load: LoaderService) {
    this.cates = new MatTableDataSource();
    translate.use(translate.currentLang);
   }

  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit() {
   
    this.cates.paginator = this.paginator;
  }
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.cates.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.cates.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Category) {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  removeData(){
    if(window.confirm("Would you like to delete these categories")){
      
      this.selection.selected.forEach((elem:Category)=>{
        console.log(elem)
        this.service.deleteCategory(elem.id).subscribe(res=>{
          console.log(res);
          this.loadData()
          this.openSnackBar()
          }, error=>{
            console.log(error);
          })
      });
      
    }
    
  }

  openSnackBar() {
    this._snackBar.open('Delete done!!', 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['bg-snackbar']
    });
  }

  loadData(){
    this.service.getCategory().subscribe((res)=>{
      this.cates.data = res;
      console.log(this.cates);
    })
  }

}
