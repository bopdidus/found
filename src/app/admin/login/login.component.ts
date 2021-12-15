import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { SessionStorageService } from 'ngx-webstorage';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
    private service: UserService,
    private session:SessionStorageService) {
    translate.use(translate.currentLang); }

  ngOnInit(): void {
  }

  
  onSubmit(f) {
    console.info(f)
    this.service.login(f).subscribe((user:any)=>{
      console.info(user);
      window.sessionStorage.setItem("auth-admin", user.token);
      this.router.navigate(['/admin/dashboard']);
  })
  }

  signOut(): void {
    //this.authService.signOut();
  }

}
