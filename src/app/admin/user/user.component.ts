import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  registerForm: FormGroup;
  isError = 'none'
  newuser: User

  constructor(public translate: TranslateService, private _snackBar: MatSnackBar,
    private service: UserService,private fb: FormBuilder) {
    translate.use(translate.currentLang);

    this.registerForm = this.fb.group({
      firstName:[''],
      role:['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}'), Validators.email]],
    });
    this.registerForm.addControl('password', new FormControl('', Validators.required))
    this.registerForm.addControl('confirmPass', new FormControl('', Validators.compose(
      [Validators.required, this.passwordMatch.bind(this)]
    )))
   }

  ngOnInit(): void {
    this.newuser = new User();
  }

  onSubmit(f){
    console.log(f)
    this.newuser.email = f.email;
    this.newuser.firstName = f.firstName;
    this.newuser.lastName = f.lastName;
    this.newuser.password = f.confirmPass;
    this.newuser.role = f.role;

    this.service.saveUser(this.newuser).subscribe((res)=>{
      if(res != null && res != undefined){
        this._snackBar.openFromComponent(SnackbarComponent, {
          data: { comp: "User", type:1},
          panelClass: 'success',
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.registerForm.reset();
        console.log(res);
      }else{
        this._snackBar.openFromComponent(SnackbarComponent, {
          data: { comp: "User", type:0},
          panelClass: 'panel-danger',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    },
    (error: HttpErrorResponse)=>{
      console.log(error);
      this._snackBar.openFromComponent(SnackbarComponent, {
        data: { comp: "User", type:0},
        panelClass: 'panel-danger',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    })
  }

 
  passwordMatch(fielControl: FormControl){
    return fielControl.value === this.registerForm.controls.password.value? null:{ matching : true}
  }
}
