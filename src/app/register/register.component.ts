import { Component, OnInit } from '@angular/core';
import { Validators,FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  durationInSeconds = 5;
  registerForm: FormGroup;
  isError = 'none'
  newuser: User
  
  constructor(public translate: TranslateService, private service: UserService,private _snackBar: MatSnackBar,
     private router: Router, private fb: FormBuilder) {
    translate.use(translate.currentLang);

    this.registerForm = this.fb.group({
      firstName:[''],
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

    this.service.register(this.newuser).subscribe((res)=>{
      if(res != null && res != undefined){
        this.openSnackBar();
        console.log(res);
        this.router.navigate(['/login']);
      }else{
        this.openSnackBarError();
      }
    },
    (error)=>{
      console.log(error);
      this.openSnackBarError()
    })
  }

  openSnackBar() {
    this._snackBar.open("Registration done!!",  "Close",{
      duration: this.durationInSeconds * 1000,
      panelClass:['success']
    });
  }

  openSnackBarError() {
    this._snackBar.open("Some errors occured!!",  "Close",{
      duration: this.durationInSeconds * 1000,
      panelClass:['panel-danger']
    });
  }

   passwordMatch(fielControl: FormControl){
    return fielControl.value === this.registerForm.controls.password.value? null:{ matching : true}
  }

}
