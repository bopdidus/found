import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  selection = new SelectionModel<User>(true, []);
  users = [];
  tables = [];
  tabFiletred = [];

  constructor(public translate: TranslateService, private _snackBar: MatSnackBar,
    private service: UserService, public load: LoaderService) { 
      translate.use(translate.currentLang);
    }

  ngOnInit(): void {
    this.loadData()
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.users);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User) {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.firstName + 1}`;
  }

  searchFunction(val: String){
    
      this.tabFiletred =  this.tables.find((x: User)=> x.lastName.toLowerCase().includes(val.toLowerCase()) || x.firstName.toLowerCase().includes(val.toLowerCase()) || x.email.toLowerCase().includes(val.toLowerCase()))
      console.log(val)
      console.log(this.tabFiletred)

      if(val == undefined || val ==""){
        console.log('vide')
        this.tabFiletred = [];
      }
        
  }

  applySearch(){
    console.log(this.tabFiletred)
    if(this.tabFiletred.length < 1 || this.tabFiletred == undefined){
      console.log('enter')
      console.log(this.tables)
      this.users = [];
      this.users = this.tables;
    }else{
      this.users = [];
      this.users.push(this.tabFiletred);
    }
  }

  removeData(){
    /*if(window.confirm("Would you like to delete these categories")){
      
      this.selection.selected.forEach((elem:User)=>{
        console.log(elem)
        this.service.deleteCategory(elem.id).subscribe(res=>{
          console.log(res);
          this.loadData()
          this.openSnackBar()
          }, error=>{
            console.log(error);
          })
      });
      
    }*/
    
  }

  openSnackBar() {
    this._snackBar.open('Delete done!!', 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['bg-snackbar']
    });
  }

  loadData(){
    this.service.getUsers().subscribe((res)=>{
      this.tables = res;
      this.users = res;
      console.log(this.tables);
    })
  }

}
