import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { SocialUser } from "angularx-social-login";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarComponent } from '../shared/components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: SocialUser;
  loggedIn: boolean;

  constructor(public translate: TranslateService,private _snackBar: MatSnackBar,
     private fb: FormBuilder, private router: Router,
     private service: UserService,
    private authService: AuthService) {
    translate.use(translate.currentLang);
   }

   loginForm = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   })

  ngOnInit(): void {
   /* this.authService.authState.subscribe((user:any) => {
      this.user = user.result;
      window.sessionStorage.setItem("auth-token", user.token);
      this.loggedIn = (user != null);
    });*/
  }

  onSubmit(f) {
    console.log(f)
    this.service.login(f).subscribe((user:any)=>{
        console.info(user);
        this.user = user.result;
        window.sessionStorage.setItem("auth-token", user.token);
        this.router.navigate(['/App/home']);
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

  signInWithGoogle(): void {
    /*this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);*/
  }
 
  signInWithFB(): void {
    /*this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res=>{
      console.log(res)
    });*/
  }
 
  signInWithLinkedIN(): void {
    //this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    //this.authService.signOut();
  }
  refreshToken(): void {
    //this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
