import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public translate: TranslateService, private _snackBar: MatSnackBar) { 
    translate.use(translate.currentLang);
  }

  ngOnInit(): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { comp: "Login", type:1},
      panelClass: 'success',
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

}
