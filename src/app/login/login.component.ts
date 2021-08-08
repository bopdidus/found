import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: SocialUser;
  loggedIn: boolean;

  constructor(public translate: TranslateService, private fb: FormBuilder, private service: UserService,
    private authService: SocialAuthService) {
    translate.use(translate.currentLang);
   }

   loginForm = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   })

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      window.sessionStorage.setItem("user", JSON.stringify(user));
      this.loggedIn = (user != null);
    });
  }

  onSubmit(f) {
    console.info(f)
    this.service.login(f).subscribe((res)=>{
        console.info(res);
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res=>{
      console.log(res)
    });
  }
 
  signInWithLinkedIN(): void {
    //this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
