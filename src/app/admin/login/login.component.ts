import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(public translate: TranslateService, private fb: FormBuilder, private router: Router,
    private service: UserService, private _snackBar: MatSnackBar) {
    translate.use(translate.currentLang); }

  ngOnInit(): void {
  }

  
  onSubmit(f) {
    console.info(f)
    this.service.login(f).subscribe((user:any)=>{
      console.info(user);
      window.sessionStorage.setItem("auth-token", user.token);
      window.sessionStorage.setItem("auth-email", user.result.email);
      this.router.navigate(['/admin/dashboard']);     
      },
      (err:HttpErrorResponse)=>{
        this._snackBar.openFromComponent(SnackbarComponent, {
          data: { comp: "Login", type:0},
          panelClass: 'panel-danger',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      })
  }

  signOut(): void {
    //this.authService.signOut();
  }

}
